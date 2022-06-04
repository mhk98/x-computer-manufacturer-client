import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useBuyDetails from '../../hooks/useBuyDetails';

const Tool = ({tool}) => {
    // const {id} = useParams();
    // const [parts] = useBuyDetails(id)
    const {_id, name, img, description, moquantity, aquantity, price} = tool;
    const navigate = useNavigate()

    const handleNavigateBuyNow = id =>{
        navigate(`/buynow/${id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
  </div>
  <figure><img src={img} alt="Shoes" /></figure>
  <h2 className='text-2xl'>{name}</h2>
    <p className='mb-4'>{description}</p>
    <p>Minimum Order Quantity: {moquantity}</p>
    <p>Available Quanity: {aquantity}</p>
    <p>Price Per Unit: {price}$</p>
    <button onClick={() => handleNavigateBuyNow(_id)} class="btn bg-primary text-white mt-4">Buy Now</button>
</div>
    );
};

export default Tool;