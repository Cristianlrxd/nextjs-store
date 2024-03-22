interface CategoryProps{
    params: {
        categories: string[],
        searhParams?: string
    }
}

export default function Category (props: CategoryProps) {
    const {categories} = props.params 
    //throw new Error('Error: Boom!')
     // Throw Error #2
     // console.log(categories)
    return(
        <h1> Categoria dinamica: {categories} </h1>
    )
}