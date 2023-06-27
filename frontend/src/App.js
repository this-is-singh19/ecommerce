/*
import { Container } from 'react-bootstrap' 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
//  <Route path='/' component={HomeScreen} exact > </Route>
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
      <Container >
        <Route path='/' Component={HomeScreen} exact />
      </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
*/
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={< ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
