import React from 'react';
import blog1 from '../../image/blog/blog1.jpg'
import blog2 from '../../image/blog/blog2.jpg'
import blog3 from '../../image/blog/blog3.jpg'

const LatestBlog = () => {
    return (
        <div>
            <h1 className='text-center text-4xl my-12'>Latest Blogs</h1>
            <div className='mt-5 ml-12 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1'>
            
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={blog1} alt="blog1" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    How to Choose the Best Laptop Processor in 2022
                    <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>This guide will help you decrypt the technical jargon that haunts every laptop specification sheet—from core count to gigahertz and from TDP to cache amounts—to help you pick the one that suits you best.</p>
                    
                </div>
                </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={blog2} alt="blog2" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    How to Choose the Best Laptop Processor in 2022
                    <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>At the heart of every laptop (or desktop) computer is a central processing unit (CPU), commonly called a processor or just, generically, a chip, that's responsible for nearly everything that goes on inside.</p>
                    
                </div>
                </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={blog3} alt="blog3" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    How to Choose the Best Laptop Processor in 2022
                    <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Most of us spend a considerable amount of time in front of a computer with a keyboard as our main typing device. As such, it's important to choose a keyboard with features that suit our needs, whether it's for gaming or productivity.</p>
                    
                </div>
                </div>
        </div>
        </div>
    );
};

export default LatestBlog;