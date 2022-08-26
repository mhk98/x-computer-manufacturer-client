import React from 'react';

const UserReview = ({review}) => {
    const {img, description} = review;
    return (

      <div class="card text-left shadow-xl p-4 border">
      <div class="">
      </div>
      <figure><img className='rounded' src={img} alt="Shoes" /></figure>
        <p className='mb-4'><small>{description}</small></p>
    
        <div className='flex justify-between'>
          <p className='font-bold'>Ratings</p>
        <div class="rating">
        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
      <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-1" class="mask mask-star bg-[#D2D2D2]" />
      <input type="radio" name="rating-1" class="mask mask-star bg-[#D2D2D2]" />
    </div>
        </div>
    </div>


    );
};

export default UserReview;