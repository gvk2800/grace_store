import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate,NavLink } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/item.css'
const Items = () => {
    const [item,setitem]=useState([]);
    // const nav=useNavigate();


    function getData(){
      axios.get('http://localhost:9000/products')
      .then((res)=>{
          console.log(res.data);
          setitem([...res.data]);
      }).catch((err)=>{ 
          console.log(err);
      })

    }
    
    useEffect(()=>{
      getData()
    },[]);
    const handleDelete=(id)=>{
      console.log(id);
      try{
        axios.delete(`http://localhost:9000/products/${id}`)
        // .then(response => {
        //   console.log(response)
        // }).error(error => {
        //   console.log(error)
        // })
        getData();
      }catch(error){
        console.log(error)
      }
      // nav('/',{replace:true});
    }
    
    
  return (
    <div className="">
    <div className="base">
        <div className="sbar">
        <ul class="nav flex-column">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <hr />
        <li class="nav-item">
        <a class="nav-link" href="#">My Cart</a>
        </li>
        <hr />
        <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
        </li>
        <hr />
        <li class="nav-item">
        <a class="nav-link" href="#">Orders</a>
        </li>
        <hr />
        <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">F.A.Q</a>
        </li>
        <hr />
        <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Contact US</a>
        </li>
        <hr />
        <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Rewards & Offers</a>
        </li>
        <hr />
        <li class="nav-item">
        <a class="nav-link" href="#">Help & Support</a>
        </li>
        </ul>

        </div>
        <div className="mbar">
        <div className="row row-cols-4 row-cols-md-6 ml-2 mt-2">
    {
        item.length !==0 ? (item.map((e,ind)=>(
            <div className='abc col m-3 card 'key={ind}>
                <div className="card border-0 ">
                    <div className="card-body">
                <div>                
                <img class="ion" src={e.image} alt="" />
                </div>
                  <div >
                    <h5>{e.title}</h5>
                  </div>
                  <hr />
                  <div>
                    <h6>₹ : {e.price}</h6>
                  </div>
                </div>
                <div>
                  <NavLink className="btn btn-warning"to={"/up/"+e.id+"/"}>Update</NavLink>
                </div>
                <button className='btn btn-danger' onClick={() => (handleDelete(e.id))}>Delete</button>
                </div>
                
               
            </div>
        ))) :(<div>Loading</div>)
    }
    

    </div>

        </div>
    </div>
    </div>
  )
}

export default Items