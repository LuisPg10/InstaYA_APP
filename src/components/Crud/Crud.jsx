import React from 'react'
import Table from 'react-bootstrap/Table'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

export const Crud = () => {
	return (
		<>
			<h3 className="Auth-form-title">Tabla de Pedidos</h3>

			<Table stripped bordered hover size="sm">
				<thead>
					<tr>
						<th>Servicio</th>
						<th>Fecha </th>
						<th>Ciudad Entrega </th>
						<th>Direccion Entrega </th>
						<th>Estado </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Guardado  </td>
					</tr>

					<tr>
						<td>2.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Cancelado </td>
					</tr>

					<tr>
						<td>3.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Cumplido </td>
					</tr>

					<tr>
						<td>4.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Cancelado </td>
					</tr>

					<tr>
						<td>5.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Guardado </td>
					</tr>

					<tr>
						<td>6.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Cumplido </td>
					</tr>

					<tr>
						<td>7.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Cancelado </td>
					</tr>

					<tr>
						<td>8.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Cancelado </td>
					</tr>

					<tr>
						<td>9.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Cancelado </td>
					</tr>

					<tr>
						<td>10.</td>
						<td>01-sep-22 </td>
						<td>Villavicencio </td>
						<td>Calle 61 N. 31-5     </td>
						<td>Cancelado </td>
					</tr>
				</tbody>
			</Table>
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div className="gap-2 mt-3">
						<Link to="/create">
							<button type="submit" className="btn btn-primary me-5">
								Crear nueva órden
							</button>
						</Link>
						<Link to="/change">
							<button type="submit" className="btn btn-primary me-5">
								Actualizar órden
							</button>
						</Link>
						<button type="submit" className="btn btn-primary">
							Eliminar órden
						</button>
					</div>
				</div>
			</div>
		</>
	);
}