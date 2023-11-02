import CartWidget from "../CartWidget/CartWidget"
const NavBar=()=>{
    return(
        <nav className="navBar">
            <h1>Boca Jrs - Tienda</h1>
            <div>
                <button>Indumentaria oficial</button>
                <button>Indumentaria Entrenamiento</button>
                <button>Accesorios y utilería</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar