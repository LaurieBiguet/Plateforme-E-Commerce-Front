import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Gallery from './components/Gallery';
import UserButton from './components/UserButton'



export default function App() {
  return (
    <div className="App">
      <UserButton />
    </div>
  );
}

