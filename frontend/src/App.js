import Home from './component/Home';
import Product from './component/Products';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Product/>}  />  
  </Routes>
  </BrowserRouter>
  );
}

export default App;
