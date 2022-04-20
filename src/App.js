import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
// import './styles/main.scss'

function App() {
  return (
    <div className="App">
      <MainNav></MainNav>
      <div className='container'>
        <h1 className='h1'>
          sass test
        </h1>
      </div>
    </div>
  );
}

function MainNav(){
  return(
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default App;
