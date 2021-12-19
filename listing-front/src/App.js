//Components 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import { AddClass } from './components/ListingCRUD/AddClass';
import { ListClasses } from './components/ListingCRUD/ListClasses';
import { SeeClass } from './components/ListingCRUD/SeeClass';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route exact path="/" element={<ListClasses />}></Route>
          <Route path="/add" element={<AddClass />}></Route>
          <Route path="/seeclass" element={<SeeClass />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
