'use server'
import { GraphQLClientSingleton } from "app/graphql"
 import { createUserMutation } from "app/graphql/mutations/createUserMutation"

 export  const handleCreateUser = async (formData:any)=>{
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject["password_condition"]
const graphqlClient =  GraphQLClientSingleton.getInstance().getClient()
const data = await graphqlClient.request(createUserMutation,{
})
const variables = {
    input:{
      ...formDataObject,
      phone: "+52" + formDataObject.phone
    }
}
 }