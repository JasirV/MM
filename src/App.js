
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from 'react-router-dom';
import Main from './componets/Main';

function App() {
 
  return (
    <div className="App">
  <Routes>
<Route path='/' element={<Main/>}/>
  </Routes>
    </div>
  );
}

export default App;
