//Components 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import { AddClass } from './components/ListingCRUD/AddClass';
import { ListClasses } from './components/ListingCRUD/ListClasses';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route exact path="/" element={<ListClasses />}></Route>
          <Route path="/add" element={<AddClass />}></Route>
          {/* <Route path="/updateCompany/:id" element={<CompanyForm />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
