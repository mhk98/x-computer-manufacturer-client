import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)

    const handleProfileSubmit = event =>{
        event.preventDefault()
        const profile= {
            name:user.displayName,
            email:user.email,
            location:event.target.location.value,
            phone:event.target.phone.value,
            education:event.target.education.value,
            linkedin:event.target.linkedin.value
        }
        // const email = user?.email;

        fetch('https://secret-river-57828.herokuapp.com/user',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                toast('Thank you for successfully add your profile')
                event.target.reset()
            }
        })
    }
    return (
<div className='flex justify-center items-center w-full'>
              <form onSubmit={handleProfileSubmit}>
                <h2 className='text-2xl font-bold'>Customer Information</h2>
            <div class="form-control w-full max-w-s">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" name='name' value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                    
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" name='email' value={user?.email} class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                    <input type="text" name='phone' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Education</span>
                    </label>
                    <input type="text" name='education' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Linkedin Profile Link</span>
                    </label>
                    <input type="text" name='linkedin' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>

        <input className='btn bg-primary mt-4 border-0' type="submit" value="Add Profile" class="btn" />
           


          </form>

            </div>
    );
};

export default Profile;