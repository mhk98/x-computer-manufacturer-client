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
        <div class="card w-full text-left shadow-xl p-4 border">
  <div class="">
  </div>
  <figure><img className='rounded' src={img} alt="Shoes" /></figure>
  <p className='text-xl'>{name}</p>
    {/* <p className='mb-4'>{description}</p> */}
    <p className='mr-4'><small>Minimum Order Quantity: {moquantity}</small></p>
    <p className='mr-4'><small>Available Quanity: {aquantity}</small></p>
    <p className='mr-4'><small>Price Per Unit: {price}$</small></p>

    <div class="rating">
    <input type="radio" name="rating-1" class="mask mask-star bg-[#D2D2D2]" />
  <input type="radio" name="rating-1" class="mask mask-star bg-[#D2D2D2]" checked />
  <input type="radio" name="rating-1" class="mask mask-star bg-[#D2D2D2]" />
  <input type="radio" name="rating-1" class="mask mask-star bg-[#D2D2D2]" />
  <input type="radio" name="rating-1" class="mask mask-star bg-[#D2D2D2]" />
  <p>0.0</p>
  <p>(0)</p>
</div>
    <button onClick={() => handleNavigateBuyNow(_id)} class="btn hover:bg-primary hover:text-white bg-white text-black mt-4 border-[#D2D2D2]">Add To Cart</button>
</div>
    );
};

export default Tool;