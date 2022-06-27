import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import logo from './assets/planet.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#rockets">
            <img
              src={logo}
              alt="Rocket Logo"
              width="36"
              height="36"
              className="d-inline-block align-center"
            />
            {' '}
            <span className="title">Space Travellers&apos; Hub</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
