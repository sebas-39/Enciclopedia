import { Link } from "react-router-dom";

function Category(props){
    return(
        <div>
            <h1>Series</h1>
            <p>Con el tiempo se ira actualizando las series que hagan falta.</p>
            <table class="table">
                <thead class="table-secondary">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOMBRE DE SERIE</th>
                    <th scope="col">DISPONIBILIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>LOVE LIVE</td>
                    <td class="table-success"><Link to={"/disponibilidad/true"}>INFO AQUI</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Category;