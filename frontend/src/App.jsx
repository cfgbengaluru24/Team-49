
import './App.css';
import Resource from './components/Resource/Resource';
function App() {
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [position, setPosition] = useState(localStorage.getItem("position"));

  return (
    <>
    <Resource></Resource>
    </>
  )
}

export default App;
