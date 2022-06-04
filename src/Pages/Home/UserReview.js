import React from 'react';

const UserReview = ({review}) => {
    const {img, description, rating} = review;
    return (

        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" width={260} height={230}/></figure>
  <div class="card-body">
    <p>{description}</p>
    <p><small className='font-bold'>{rating} stars</small></p>
  </div>
</div>


    );
};

export default UserReview;