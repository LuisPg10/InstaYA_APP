import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Crud } from './components/Crud/Crud';
import { Create } from './components/Moon/Create';
import { Change } from './components/Sun/Change';
import { Home } from './pages/Home';

function App() {
  return (


  <BrowserRouter>
    <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/crud" element={<Crud />} />
          <Route path="/create" element={<Create />} />	
          <Route path="/change"	element={<Change />} />
     
    </Routes>  
    </BrowserRouter>   
  
  );
}

export default App;
