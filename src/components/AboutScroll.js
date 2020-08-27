import React, { Component } from "react";

export default class AboutScroll extends Component {
  state = {};
  isBottom(element) {
    return element.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }
  trackScrolling = () => {
    const toxicElement = document.getElementById("toxic");
    const severeToxicElement = document.getElementById("severeToxic");
    const obsceneElement = document.getElementById("obscene");
    const threatElement = document.getElementById("threat");
    const insultElement = document.getElementById("insult");
    const identityElement = document.getElementById("identityHate");
    if (this.isBottom(toxicElement)) {
      this.setState({ whichVisible: "toxic" });
    }
    if (this.isBottom(severeToxicElement)) {
      this.setState({ whichVisible: "severeToxic" });
    }
    if (this.isBottom(obsceneElement)) {
      this.setState({ whichVisible: "obscene" });
    }
    if (this.isBottom(threatElement)) {
      this.setState({ whichVisible: "threat" });
    }
    // if (this.isBottom(insultElement)) {
    //   this.setState({ whichVisible: "insult" });
    // }
    // if (this.isBottom(identityElement)) {
    //   this.setState({ whichVisible: "identityHate" });
    // }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("the string send to backend", this.state.input);
    event.preventDefault();
  };

  render() {
    const { whichVisible } = this.state;
    return (
      <div className="tryItPage">
        <div className="classificationSection">
          <div className="classificationFlexContainer" id="toxic">
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "toxic"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Welcome
              </h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "toxic"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                This website was made so I could learn how to use Material-UI,
                start a personal developer's blog, and showcase some of the work
                I've done.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="severeToxic">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "severeToxic"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                My own personal coding journey began in 2019 when I was 1 year
                into pharmacy school. Deciding that the world of pharmaceutics
                and science wasn't for me, I pivoted and haven't looked back
                since. My first few months of coding were all self taught along
                with the use of classes from Udemy.
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "severeToxic"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                My Start
              </h1>
            </div>
          </div>
          <div className="classificationFlexContainer" id="obscene">
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "obscene"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Lambda
              </h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "obscene"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                In late 2019, I began to shop around boot camps to further my
                journey into programming and to receive a more structured
                approach to learning web development. At the suggestion of a
                friend, I applied to Lambda School due to their curriculum being
                one of the few that included both Fullstack and Computer
                Science.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="threat">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "threat"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                I've completed Lambda's Web Development bootcamp and I'm on the
                hunt for a job! I love to work with both the Frontend and
                Backend and I'm always excited to dive into new frameworks and
                libraries in my work. Contact me if you know of any
                opportunities!
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "threat"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Today
              </h1>
            </div>
          </div>
          {/* <div className="classificationFlexContainer" id="insult">
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "insult"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Insult
              </h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "insult"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Insult measures abusive language targeted at someone or
                something.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="identityHate">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "identityHate"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Identity Hate measures the bias of text through prejudice on the
                basis of race, religion, sexual orientation, or other grounds.
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "identityHate"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Identity Hate
              </h1>
            </div>
          </div> here */}
        </div>
      </div>
    );
  }
}
