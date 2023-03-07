import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Axios from 'axios';
import { useState } from 'react'; 


 const App=()=>{
    const[image,setImage]=useState('')
    const[res,setRes]=useState([])
    
const change=(event)=>{
    let urlApi = `https://pixabay.com/api/?key=34045882-b91848655dd896579e01d1920&q=${image}&image_type=photo`
    Axios.get(urlApi).then(res=>res.data).then(res=>setRes(res.hits))  
    event.preventDefault()    
}

 
    return(
        <>
        <div class='container'>
          <div class='row'>
          <div class='col-sm-12'>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Only Images </strong> Will be Search Here....
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
          <div class='card '>
            <div class='card-header bg-primary'>
            <h1 class='display-1'>Image Search Engine </h1>

            </div>
            
            <div class='card-body'>
            <form>
        <input data-aos="fade-right"  data-aos-duration="2500" class="form-control me-2" type="text" placeholder="Search Images Here..." aria-label="Search"
             value={image} onChange={e=>setImage(e.target.value)}
        /><br></br>
        <button class="btn btn-outline-success"  data-aos="fade-left"  data-aos-duration="2500" onClick={change}>Search</button>
      </form><br></br>
      {res.map((e,i)=>
              <img class='img img-thumbnail img-rounded' src={e.largeImageURL} height='500px' width='300px' alt={e.tag}></img>
              
            )}
            </div>
            <div class='card-footer float-right'>
            <small  class='text-muted'>@ made by RK ANBU (2023)</small>
            </div>
          </div>

          </div>

          </div>
        </div>
  
</>
    )
}
export default App;
