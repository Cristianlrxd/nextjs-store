'use server'
import { GraphQLClientSingleton } from "app/graphql"
 import { createUserMutation } from "app/graphql/mutations/createUserMutation"
 import { createAccesToken } from "app/utils/auth/createAccesToken"
 import { redirect } from "next/navigation"

 export  const handleCreateUser = async (formData:any)=>{
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject["password_confirmation"]

const graphqlClient =  GraphQLClientSingleton.getInstance().getClient()
const data = await graphqlClient.request(createUserMutation,{
})
const variables = {
    input:{
      ...formDataObject,
      phone: "+52" + formDataObject.phone
    }
}
const {customerCreate} = await graphqlClient.request(createUserMutation,variables)
const {customerUserErrors,customer} = customerCreate
if(customer?.firstName){
await createAccesToken(formDataObject.email, formDataObject.password)
redirect("/store")
}
}