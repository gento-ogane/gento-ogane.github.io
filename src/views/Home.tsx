import * as React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Top from "./Pages/Top";
import Articles from "./Pages/Articles";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";
import About from "./Pages/About";
import Header from  './organisms/Header';
import {headerHeightNum}from '../utils/size';


const Home: React.FC = props => {
  return (
    <>
    <Header/>
    <Router>
      <Switch>
        <Content>
        <Route exact path="/" component={Top} />
        <Route exact path='/about' component={About} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={Articles} />
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