import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Company from './components/pages/Company';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>

      <Container customClass="min_height">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/newproject' element={<NewProject />}></Route>
        </Routes>
      </Container>

      <footer>
        <p>Footer</p>
      </footer>
    </Router>
  );
}

export default App;
