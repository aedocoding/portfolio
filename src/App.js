import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import Main from "./components/Main";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

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
            {/* <Route path="/about" component={} /> */}
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
