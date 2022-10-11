import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TimePicker from 'react-bootstrap-time-picker';
import { Link } from "react-router-dom";


export const Create = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Ciudad de Recogida</Form.Label>
                <Form.Control placeholder="Cartagena de Indias" />
                <Form.Text className="text-muted">
                    Agrege Departamento u otros detalles a su discreción.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Dirección de Recogida</Form.Label>
                <Form.Control placeholder="Calle 123 #12-34" />
                <Form.Text className="text-muted">
                    Agrege numero de Apartamento u otros detalles a su discreción.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nombre Destinatario</Form.Label>
                <Form.Control placeholder="Juan Perez" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Cedula Destinatario</Form.Label>
                <Form.Control placeholder="Juan Perez" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Ciudad Destinatario</Form.Label>
                <Form.Control placeholder="Santa Marta" />
                <Form.Text className="text-muted">
                    Agrege Departamento u otros detalles a su discreción.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Dirección Destinatario</Form.Label>
                <Form.Control placeholder="Calle 123 #12-34" />
                <Form.Text className="text-muted">
                    Agrege numero de Apartamento u otros detalles a su discreción.
                </Form.Text>
            </Form.Group>

            <div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <Form.Group controlId="duedate">
                            <Form.Label>Fecha Recogida</Form.Label>
                            <Form.Control type="date" name="duedate" placeholder="Due date" />
                        </Form.Group>
                    </div>
                </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <Form.Label>Hora Recogida</Form.Label>
                        <TimePicker start="00:00" end="23:30" step={30} />
                    </div>
                </div>
            </div>

            <Form.Group className="mb-3">
                <Form.Label>Alto (cm)</Form.Label>
                <Form.Control placeholder="80 cm" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Ancho (cm)</Form.Label>
                <Form.Control placeholder="80 cm" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Largo (cm)</Form.Label>
                <Form.Control placeholder="80 cm" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Peso (Kg)</Form.Label>
                <Form.Control placeholder="0.2 Kg" />
            </Form.Group>

            <Link to="/crud">
                <Button variant="primary" type="submit">
                    Crear
                </Button>
            </Link>
        </Form>
    );
}