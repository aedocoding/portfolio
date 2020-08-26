import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import About from "./components/About";
import COK from "./components/projects/COK.js";
import BigArmor from "./components/projects/BigArmor";
import YT from "./components/projects/YT";
import "./App.css";

const sections = [
  { title: "Projects", url: "/" },
  { title: "Blog", url: "blog" },
  { title: "About", url: "about" },
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Router>
          <Header title="Allen Do - Web Developer" sections={sections} />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/connectourkids" component={COK} />
            <Route path="/bigarmor" component={BigArmor} />
            <Route path="/tutorials" component={YT} />
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
