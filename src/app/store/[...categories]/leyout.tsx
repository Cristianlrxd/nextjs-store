
export default function Leyout({ children }: { children: React.ReactNode}) {
    return(
        <main>
            <nav>Navegacion de las categorias</nav>

            {children}
            
        </main>
    )
}