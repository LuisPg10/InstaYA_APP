import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Crud } from './components/Crud/Crud';
import { Home } from './pages/Home';

function App() {
  return (


  <BrowserRouter>
    <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/crud" element={<Crud />} />		
     
    </Routes>  
    </BrowserRouter>   
  
  );
}

export default App;
