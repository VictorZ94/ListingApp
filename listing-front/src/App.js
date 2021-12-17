//Components 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import { ClassList } from './components/ListingCRUD/ClassList';


function App() {

  // const divStyleCard = {
  //   width: '18rem',
  //   display: 'inline-block',
  //   margin: '6px',
  // }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route exact path="/" element={<ClassList />}></Route>
          {/* <Route path="/companyForm" element={<ClassList />}></Route>
          <Route path="/updateCompany/:id" element={<CompanyForm />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
    // <div className='container-fluid'>
    //   <div className="row">
    //     <div className="col">
    //       <div className="card" style={ divStyleCard }>
    //         <img src="" className="card-img-top" alt="..."></img>
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //           <a href="#" className="btn btn-primary">Go somewhere</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

export default App;
