import { Link } from "react-router-dom";

function Personajes(){
    return(
        <div>
            <h1>Personajes</h1>
            <p>Con el tiempo se ira actualizando los personajes que hagan falta.</p>
            <table class="table">
                <thead class="table-secondary">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOMBRE DE PERSONAJE</th>
                    <th scope="col">SERIE</th>
                    <th scope="col">DISPONIBILIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>YOSHIKO TSUSHIMA</td>
                    <td>LOVE LIVE</td>
                    <td class="table-success"><Link to={"/disponibilidad/trueP"}>INFO AQUI</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Personajes;