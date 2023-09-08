import './Contacto.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contacto = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%",
            padding: 30,
            marginTop: "5%"
        }}>
            <Form onSubmit={() => alert("Reporte enviado, ¡gracias por aportar!")}>
            <h4>Ponte en contacto con nosotros 😊:</h4>
                <Form.Group>
                    <Form.Label>Nombre Completo:</Form.Label>
                    <Form.Control type="text"
                        placeholder="John Johnson" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Correo Electrónico:</Form.Label>
                    <Form.Control type="email"
                        placeholder="example@gmail.com...." required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Seleccione la razón: </Form.Label>
                    <Form.Select required>
                        <option value="">Opciones...</option>
                        <option value="problemaTecnico">Problema Técnico</option>
                        <option value="recomendacion">Recomendación</option>
                        <option value="reportarEstafa">Reportar Estafa</option>
                        required</Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control type="text" placeholder="Escribe aquí..." required />
                </Form.Group>
                <Button style={{marginTop:'5%'}} variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}

export default Contacto;