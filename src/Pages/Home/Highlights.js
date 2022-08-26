import React from 'react';
// import './Highlights.css'

import offer1 from '../../image/offer/offer1.jpg'
import offer2 from '../../image/offer/offer2.jpg'
import offer3 from '../../image/offer/offer3.jpg'
import offer4 from '../../image/offer/offer4.jpg'

const Highlights = () => {
    return (
        <div>
            <h2 className='border-b-2 w-12 border-primary text-xl font-bold my-8 '>Hightlights</h2>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2'>
            <div class="card  w-full bg-base-100 shadow-xl border">
                <figure class="">
                    <img src={offer1} alt="Shoes" class=" " />
                </figure>

            </div>
            <div class="card  w-full bg-base-100 shadow-xl border">
                <figure class="">
                    <img src={offer2} alt="Shoes" class=" " />
                </figure>

            </div>
            <div class="card  w-full bg-base-100 shadow-xl border">
                <figure class="">
                    <img src={offer3} alt="Shoes" class=" " />
                </figure>

            </div>
            <div class="card  w-full bg-base-100 shadow-xl border">
                <figure class="">
                    <img src={offer4} alt="Shoes" class=" " />
                </figure>

            </div>
            </div>
        </div>
    );
};

export default Highlights;