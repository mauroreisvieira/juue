/** @jsx h */
import { Component, h, render } from '../lib/vivaldi.cjs.js';

class Headline extends Component {
    render() {
        return (
            <div>
                <h1 className="headline">
                    Hello this in an h1
                    <br />
                    new line
                </h1>
                <h2>Second Headline</h2>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Headline />
                <p>Lorem ipsum</p>
                <ul>
                    <li>
                        <a href="">anchor</a>
                    </li>
                    <li>More</li>
                </ul>
                <ol>
                    <li>item</li>
                </ol>
                <button
                    ref={node => {
                        node.addEventListener('click', console.log);
                    }}
                >
                    Click Me!
                </button>
            </div>
        );
    }
}

console.log(document.body);
console.log(App);
render(<App />, document.body);
