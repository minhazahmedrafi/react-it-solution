import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import CaseStudy from './components/CaseStudy';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/casestudy" component={CaseStudy}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </>
  );
}

export default App;
