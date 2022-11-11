import { Link } from "react-router-dom";

function Navbar(props){
    return(
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src="./Icon.png" width="40" />
                <span class="fs-4">Wainfo</span>
            </a>

            <ul class="nav nav-pills">
                <Link to={"/"} className="nav-item" class="nav-link">Pagina Principal</Link>
                <Link to={"/category"} className="nav-item" class="nav-link">Categorias</Link>
                <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                <Link to={"/about"} className="nav-item" class="nav-link">Sobre Nosotros</Link>
            </ul>
            </header>
        </div>
    );
}

export default Navbar;