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
            <h2 className='text-3xl font-bold mb-12'>Our Customer Reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12'>
            {
                reviews.map(review => <UserReview key={review._id} review={review}></UserReview>)
            }
            </div>
        </div>
    );
};

export default UserReveiws;