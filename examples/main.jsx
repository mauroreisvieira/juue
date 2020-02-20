import Vivaldi, { Component, render } from '../lib/vivaldi.esm.js';

class Headline extends Component {
    render() {
        return (
            <div>
                <h1 id="testes" className="headline">
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
                    onClick={() => {
                        console.log('dsd');
                    }}
                >
                    Click Me!
                </button>
            </div>
        );
    }
}

render(<App />, document.body);
