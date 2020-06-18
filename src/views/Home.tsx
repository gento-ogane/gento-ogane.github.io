import * as React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./Pages/Top";
import Articles from "./Pages/Articles";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Header from  './organisms/Header';


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