import * as React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./pages/Top";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import Header from  './organisms/Header';
import Footer from  './organisms/Footer';


const Home: React.FC = props => {
  return (
    <>
    <Router>
    <Header/>
      <Switch>
        <Content>
        <Route exact path="/" component={Top} />
        <Route exact path='/about' component={About} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/articles' component={Articles} />
        </Content>
      </Switch>
    <Footer/>
    </Router>
    </>
  );
};

const Content = styled.div`
display:flex;
width:100%;
height:100%;
`

export default Home;