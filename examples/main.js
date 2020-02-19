/** @jsx h */
import { h, render } from '../lib/vivaldi.cjs';

function Headline() {
  return h("div", null, h("h1", {
    className: "headline"
  }, "Hello this in an h1", h("br", null), "new line"), h("h2", null, "Second Headline"));
}

function App() {
  return h("div", null, h(Headline, null), h("p", null, "Lorem ipsum"), h("ul", null, h("li", null, h("a", {
    href: ""
  }, "anchor")), h("li", null, "More")), h("ol", null, ' ', items.map(item => h("li", null, item)), ' '), h("button", {
    ref: node => {
      node.addEventListener('click', console.log);
    }
  }, "Click Me!"));
}

console.log(document.body);
render(h(App, null), document.body);