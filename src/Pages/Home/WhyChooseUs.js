import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faCertificate, faCheck, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import banner4 from '../../image/banner/banner4.png'

const WhyChooseUs = () => {
    return (
        <div className='mt-12 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1'>
            <div className='w-full ml-16'>
            <h1 className='text-4xl font-bold mb-4'>Why choose our services?</h1>
            <div className='border-b-4 border-primary w-28 ml-16 mb-8'></div>
            <p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.

                Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
            </div>
                <div className='w-full ml-28'>
                    <img src={banner4} alt=''/>
                    <p className='text-2xl mt-8'><FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl mr-4' icon={faCheckSquare}></FontAwesomeIcon>Best talent in the industry business</p>
                    <p className='text-2xl mt-2'><FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl mr-4' icon={faCheckSquare}></FontAwesomeIcon>One of the most famous company.</p>
                    <p className='text-2xl mt-2'><FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl mr-4' icon={faCheckSquare}></FontAwesomeIcon>We have sold over 30core product</p>
                    <p className='text-2xl mt-2'><FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl mr-4' icon={faCheckSquare}></FontAwesomeIcon>Most dedicated, passionates team</p>
                    <p className='text-2xl mt-2'><FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl mr-4' icon={faCheckSquare}></FontAwesomeIcon>Company has over 20000 workers.</p>
                </div>
        </div>
    );
};

export default WhyChooseUs