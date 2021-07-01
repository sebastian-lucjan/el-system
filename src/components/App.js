import logo from '../logo.svg';
import '../App.css';

console.log('hej');
const objectS = {
  data: 'hej',
  test: 'test',
  looker: { posts: [1, 2, 3] },
};

function testFunc({ data }) {
  console.log(data);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
