import { Component, h, render } from '../lib/vivaldi.esm.js';

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
                <Headline isValid={true} />
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
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }

    handleClick() {
        console.log('dsd');
    }
}

render(<App />, document.body);
