import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import '../styles/update.css'

const Update = () => {
    const [dat,setdat]=useState({
        title:"",
        image:"",
        description:"",
        price:0,
    });
    const [formd,setformd]=useState({
        title:"",
        image:"",
        description:"",
        price:0,
        
          
    });
    const {id}=useParams();
    // const handleChange=(e)=>{
    //     setdat({
    //         ...dat,[e.target.name]:e.target.value
    //     })
    // }
    console.log(dat)
    useEffect(()=>{
        // let res=await axios.get("http://localhost:9000/products/"+id)
        // res=await res.data;
        // setdat(res);
        axios.get('http://localhost:9000/products/'+id)
        .then((res)=>{
            // console.log(res.data);
            setdat(res.data);
             console.log(dat);
        }).catch((err)=>{ 
            console.log(err);
        })
        // console.log(res);

    },[])
    // console.log(id);
  return (

    <>
    <Form>
        <h1>Update the Product</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"value={dat.title} placeholder="Enter Title" name="title"/>
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" value={dat.image} placeholder="Enter Image URL" name="image" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" defaultValue={dat.description}  name="description" />
      </Form.Group>
      <Form.Label>Price</Form.Label>
      <Form.Control type="text"value={dat.price} placeholder="Enter Price" name="price"/>
      <Form.Group className="mt-3" >
      <Button variant="primary" type="submit">
        Update product
      </Button>
      </Form.Group>
      
    </Form>
    </>
  )
}

export default Update

