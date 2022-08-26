import React from 'react';

const Contact = () => {
    return (
        <div className='mt-8 items-center'>
            <input type="text" placeholder="Name" class="mb-4 input input-bordered input-black w-full max-w-xs" /><br/>
            <input type="text" placeholder="Email" class="mb-4 input input-bordered input-black w-full max-w-xs" /><br/>
            <input type="text" placeholder="Phone Number" class="mb-4 input input-bordered input-black w-full max-w-xs" /><br/>
            <input type="submit" className='btn' value="Submit" />
        </div>
    );
};

export default Contact;