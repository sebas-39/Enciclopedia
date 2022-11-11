import { Link } from "react-router-dom";

function Footer(){
    return(
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <Link to={"/"} className="nav-item" class="nav-link px-2 text-muted">Pagina Principal</Link>
                <Link to={"/tecnology"} className="nav-item" class="nav-link px-2 text-muted">Tecnologias Utilizadas</Link>
                <Link to={"/about"} className="nav-item" class="nav-link px-2 text-muted">Sobre Nosotros</Link>
                </ul>
                <p class="text-center text-muted">© 2022 Company, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;