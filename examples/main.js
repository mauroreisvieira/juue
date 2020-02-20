import Vivaldi, { Component, render } from '../lib/vivaldi.esm.js';

class Headline extends Component {
  render() {
    return Vivaldi("div", null, Vivaldi("h1", {
      id: "testes",
      className: "headline"
    }, "Hello this in an h1", Vivaldi("br", null), "new line"), Vivaldi("h2", null, "Second Headline"));
  }

}

class App extends Component {
  render() {
    return Vivaldi("div", null, Vivaldi(Headline, null), Vivaldi("p", null, "Lorem ipsum"), Vivaldi("ul", null, Vivaldi("li", null, Vivaldi("a", {
      href: ""
    }, "anchor")), Vivaldi("li", null, "More")), Vivaldi("ol", null, Vivaldi("li", null, "item")), Vivaldi("button", {
      onClick: () => {
        console.log('dsd');
      }
    }, "Click Me!"));
  }

}

render(Vivaldi(App, null), document.body);
