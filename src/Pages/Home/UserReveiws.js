import React, { useEffect, useState } from 'react';
import UserReview from './UserReview';

const UserReveiws = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () =>{
        fetch('https://damp-falls-64903.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data) )
    }, [])
    return (
        <div>
            <div className='my-8'>
            <h2 className='text-xl font-bold mb- text-left'>Reviews and Ratings</h2>
            <div className='border-b-2 w-12 border-primary'></div>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-2'>
            {
                reviews.map(review => <UserReview key={review._id} review={review}></UserReview>)
            }
            </div>
        </div>
    );
};

export default UserReveiws;