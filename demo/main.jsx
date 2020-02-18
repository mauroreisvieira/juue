import h, { Fragment } from '../lib/index';
function Headline() {
    return (
        <Fragment>
            <h1 className="headline">
                Hello this in an h1
                <br />
                new line
            </h1>
            <h2>Second Headline</h2>
        </Fragment>
    );
}
function Main() {
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
const app = document.querySelector('#app');
app.appendChild(Main());
