import {Container, Row} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap'

export default  function Contato () {

return (
    <Container>
        <Row>
    <Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>
    
    <Form.Group controlId="formBasicChecbox">
    </Form.Group>
    <Button variant="primary" type="submit">
        Enviar
      </Button>
</Form>

<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Contatos:</th>
      <th scope="col">WhatsApp: 11 98786-8766</th>
      <th scope="col">Central de Atendimentos: 0800-75757576</th>
      <th scope="col">FullStack@FullStack.com.br</th>
    </tr>
  </thead>
</table>


</Row>
</Container>
)
}

    



















