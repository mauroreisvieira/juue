import { Component, h, render } from '../lib/vivaldi.esm.js';

class Headline extends Component {
  constructor() {
    super();
    console.log(this.props);
  }

  render() {
    return h("div", null, h("h1", {
      id: "testes",
      className: "headline"
    }, "Hello this in an h1", h("br", null), "new line"), h("h2", null, "Second Headline"));
  }

}

class App extends Component {
  render() {
    return h("div", null, h(Headline, {
      isValid: "sasa"
    }), h("p", null, "Lorem ipsum"), h("ul", null, h("li", null, h("a", {
      href: ""
    }, "anchor")), h("li", null, "More")), h("ol", null, h("li", null, "item")), h("button", {
      onClick: this.handleClick
    }, "Click Me!"));
  }

  handleClick() {
    console.log('dsd');
  }

}

render(h(App, null), document.body);