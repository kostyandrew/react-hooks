// Import React
import React from "react";
// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, Image } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";
import "./style.css";
import styled from "styled-components";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    heading: "#7b0046",
    tertiary: "#03A9FC",
    quaternary: "grey"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

/* eslint-disable-next-line import/no-webpack-loader-syntax */
const kottans = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120"><image opacity="0.2" xlink:href="${require("!url-loader!./resources/kottans.png")}" x="10" y="10" height="100" width="100"/></svg>`;
const stroke = `<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><line x1="20" y1="20" x2="80" y2="80" stroke="blue" stroke-width="10"/><line x1="90" y1="10" x2="10" y2="90" stroke="red" stroke-width="10"/></svg>`;

const transitionDuration = 500;

const Iframe = ({ id, module, highlights, ...props }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [afterTransition, setAfterTransition] = React.useState(false);
  React.useEffect(() => {
    const timeout = window.setTimeout(
      () => setAfterTransition(true),
      transitionDuration
    );
    return () => window.clearTimeout(timeout);
  }, []);
  return (
    <div
      className={`iframe-wrapper iframe-wrapper_${
        loaded ? "loaded" : "loading"
      }`}
    >
      {afterTransition && (
        <iframe
          {...props}
          src={`https://codesandbox.io/embed/${id}?fontsize=16&codemirror=1&view=editor&hidenavigation=1${
            module ? `&module=${module}` : ""
          }${highlights ? `&highlights=${highlights}` : ""}`}
          title={props.title}
          onLoad={() => setLoaded(true)}
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      )}
    </div>
  );
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress="pacman" theme={theme}>
        <Slide
          bgColor="primary"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,${kottans}')`,
            backgroundSize: "10vw"
          }}
        >
          <Heading
            size={1}
            caps
            textColor="heading"
            style={{ fontSize: "7vh" }}
          >
            <Image
              display="inline-block"
              src={require("./resources/logo.svg")}
              style={{
                verticalAlign: "bottom",
                margin: 0,
                height: "1em",
                animation: "rotate 3.5s infinite linear"
              }}
            />{" "}
            React Continued
          </Heading>
          <Heading
            size={2}
            style={{ fontSize: "6vh", color: "#555", margin: "3vh 0 5vh 0" }}
          >
            Part 3
          </Heading>
          <Text
            margin="10px 0 0"
            style={{ fontSize: "6vh" }}
            textColor="secondary"
            size={3}
            bold
          >
            Hooks, Refs, Context
            <br /> and Witch of Portal
          </Text>
        </Slide>
        <Slide bgColor="pink">
          <div style={{ display: "flex" }} style={{ fontSize: "7vh" }}>
            <Image
              style={{ height: "20vh", borderRadius: "20% 40% 0% 15%" }}
              src={require("./resources/i.jpg")}
            />
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <Heading
                textColor="white"
                style={{ fontSize: "1em", marginBottom: "0.5em" }}
              >
                Andrii Kostetskyi
              </Heading>
              <Text textColor="white">
                Fullstack Developer in <i>ASD</i>
              </Text>
            </div>
          </div>
        </Slide>
        <Slide
          bgColor="black"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,${stroke}')`,
            backgroundSize: "100vw 100vh"
          }}
        >
          <Heading
            style={{ fontSize: "10vmin", textShadow: "0 0 8px white" }}
            textColor="white"
          >
            class extend React.Component
          </Heading>
        </Slide>
        <Slide>
          <SlideHeading textColor="tertiary" style={{ fontSize: 70 }}>
            Use Hooks
          </SlideHeading>
          <Heading size={2} style={{ fontSize: 40 }}>
            React 16.8
          </Heading>
        </Slide>
        <Slide bgColor="red">
          <SlideHeading textColor="white">Use State</SlideHeading>

          <Iframe
            highlights="4"
            id="67xl58mw3"
            module="%2Fsrc%2FCounterButton.jsx"
            title="Use state"
          />
        </Slide>
        <Slide bgColor="orange">
          <SlideHeading textColor="secondary">Use Effect</SlideHeading>
          <Iframe
            highlights="6"
            id="6vz86wpzzr"
            module="%2Fsrc%2FTimer.jsx"
            title="Use Effect"
          />
        </Slide>
        <Slide bgColor="yellow">
          <SlideHeading textColor="secondary">Life Cycles</SlideHeading>
          <Iframe
            highlights="5,9,13"
            id="k0qwkrzjr"
            module="%2Fsrc%2FCycles.jsx"
            title="Life Cycles"
          />
        </Slide>
        <Slide bgColor="green">
          <SlideHeading textColor="white">Use Ref</SlideHeading>
          <Iframe
            highlights="5,8"
            id="y392l8j18z"
            module="%2Fsrc%2FJquery.jsx"
            title="Use Ref"
          />
        </Slide>
        <Slide bgColor="cyan">
          <SlideHeading textColor="secondary">Use Memo</SlideHeading>
          <Iframe
            highlights="4,14"
            id="728zzr1rkj"
            module="%2Fsrc%2FMemo.jsx"
            title="Use Memo"
          />
        </Slide>
        <Slide bgColor="blue">
          <SlideHeading textColor="white">Context</SlideHeading>
          <Iframe
            highlights="3,10"
            id="k2om741zp7"
            module="%2Fsrc%2FTheme.jsx"
            title="Context"
          />
        </Slide>
        <Slide bgColor="purple">
          <SlideHeading textColor="white">Portal</SlideHeading>
          <Iframe
            highlights="8"
            id="615rlr6qnw"
            module="%2Fsrc%2FModal.jsx"
            title="Portal"
          />
        </Slide>
        <Slide
          style={{
            backgroundImage:
              "linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, purple, purple)",
            backgroundSize: "1800vw 1800vh",
            backgroundPosition: "center center",
            animation: "rainbow 18s linear infinite"
          }}
        >
          <SlideHeading>Presentation</SlideHeading>
          <Image src={require("./resources/frame.png")} />
        </Slide>
        <Slide bgColor="pink">
          <SlideHeading textColor="black">Questions?</SlideHeading>
        </Slide>
        <Slide bgColor="black">
          <Heading
            fit
            textColor="white"
            style={{ fontFamily: "Times New Roman" }}
          >
            FIN
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

const SlideHeading = props => (
  <Heading
    {...props}
    size={2}
    style={{
      ...props.style,
      fontSize: "10vh",
      textShadow: "0 0 8px currentColor"
    }}
  />
);
