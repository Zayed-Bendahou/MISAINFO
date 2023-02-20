import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid className="justify-content-center">
        <Form className="d-flex w-50 ">
          <Form.Control
            type="search"
            placeholder="Chercher un produit"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-info">Chercher</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
