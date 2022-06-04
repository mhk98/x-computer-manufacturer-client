import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth);
    const handleReviewSubmit= event =>{
        event.preventDefault()

        const review ={
            name:user.name,
            description:event.target.description.value, 
            rating:event.target.rating.value,
            img:event.target.img.value,
        }

        fetch('https://damp-falls-64903.herokuapp.com/review', {
            method: 'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                toast('Thank you for successfully add a review')
                event.target.reset()
            }
        })

    }
    return (
        <div className='flex justify-center items-center w-full'>
              <form onSubmit={handleReviewSubmit}>
                <h2 className='text-2xl font-bold'>Customer Review</h2>
            <div class="form-control w-full max-w-s">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" name='name' value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                    
            </div>
            <div class="form-control w-full max-w-s">
                    <label class="label">
                        <span class="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='img' class="input input-bordered w-full max-w-xs" />
                    
            </div>
            
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Rating</span>
                    </label>
                    <input type="text" name='rating' placeholder="Rating us input 1-5" class="input input-bordered w-full max-w-xs" />
            </div>
            
        <input className='btn bg-primary mt-4 border-0' type="submit" value="Add Review" class="btn" />
           


          </form>

            </div>
    );
};

export default Review;