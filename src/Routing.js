import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';
import Jwellery from './Jwellery';
import Item from './Item';
import Upload from './Upload';
function Routing() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">Navbar</Link>&nbsp;&nbsp;&nbsp;
          <Nav className="me-auto">
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/electronics">Electronics</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/jwellery">Jwellery</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/upload">Upload</Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' Component={Home}></Route>
         <Route path='/electronics' Component={Electronics}></Route>
          <Route path='/jwellery' Component={Jwellery}></Route>
            <Route path='/item' Component={Item}></Route>
            <Route path='/upload' Component={Upload}></Route>
      </Routes>
    </>
  );
}
export default Routing;