/** @jsx h */
import { h, render } from '../lib/vivaldi.cjs';
function Headline() {
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
function App() {
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
                {' '}
                {items.map(item => (
                    <li>{item}</li>
                ))}{' '}
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

console.log(document.body);
render(<App />, document.body);
