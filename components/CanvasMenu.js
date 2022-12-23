import {Button,InputGroup} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CanvasMenu() {
    const navbarItems=[
        {
            id:1,
            title:'MEN',
            link:'#'
        },
        {
            id:2,
            title:'WOMEN',
            link:'#'
        },
        {
            id:3,
            title:'KIDS',
            link:'#'
        },
        {
            id:4,
            title:'CUSTOMIZE',
            link:'#'
        },
        {
            id:5,
            title:'FAVORITES',
            link:'#'
        },
    ]
  return (
    <>
        <Navbar  bg="light" expand={'xl'} >
          <Container fluid>
            <Navbar.Brand href="/">SHOPPING</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                SHOPPING
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {navbarItems.length>0 && navbarItems.map((item,i)=>{
                    return(
                        <Nav.Link key={i} href={item.link} >{item.title}</Nav.Link>
                    )
                })}         
                </Nav>
               
                    <Form className="d-flex">
                    <InputGroup className="mt-xl-0 mt-lg-0 mt-2">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </InputGroup>
                    </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default CanvasMenu;