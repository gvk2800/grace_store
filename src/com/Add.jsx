import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/add.css'

function Add() {
    const [formd,setformd]=useState({
        title:"",
        image:"",
        description:"",
        price:0,
        
          
    });
    const na=useNavigate();
    const handleChange=(e)=>{
        setformd({
            ...formd,[e.target.name]:e.target.value
        })
    }
    const create=async(data)=>{
        try{
            const res=await axios.post('http://localhost:9000/products',data);

        }catch(error){
            console.log(error)
        }
        na('/',{replace:true});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        create(formd);
    }
    console.log(formd);
  return (
    <Form>
        <h1>Add A Product</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"value={formd.title} placeholder="Enter Title" name="title"onChange={handleChange}/>
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" value={formd.image} onChange={handleChange} placeholder="Enter Image URL" name="image" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={formd.description} onChange={handleChange} placeholder="Enter Description" name="description" />
      </Form.Group>
      <Form.Label>Price</Form.Label>
      <Form.Control type="text"value={formd.price} placeholder="Enter Price" name="price"onChange={handleChange}/>
      <Form.Group className="mt-3" >
      <Button variant="primary" type="submit"onClick={handleSubmit}>
        Add product
      </Button>
      </Form.Group>
    </Form>
  );
}

export default Add;