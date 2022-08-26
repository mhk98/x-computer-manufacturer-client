import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faCertificate, faCheck, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import banner4 from '../../image/banner/banner4.png'

const WhyChooseUs = () => {
    return (
        <div className=''>
            <div className='my-8'>
            <h2 className='text-xl font-bold text-left'>About Services</h2>
            <div className='border-b-2 border-primary w-12'></div>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-4'>
            <div className='w-full'>
            <h1 className='text-xl font-bold mb-4'>Why choose our services?</h1>
            <p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.

                Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
            </div>
                <div className='w-full'>
                    <img src={banner4} alt=''/>
                    <div className='my-8'>
                    <div className='flex items-center my-2'>
                    <FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl  ' icon={faCheckSquare}></FontAwesomeIcon>
                    <p className='text-2xl ml-4'>Best talent in the industry business.</p>
                    </div>
                    <div className='flex items-center my-2'>
                    <FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl  ' icon={faCheckSquare}></FontAwesomeIcon>
                    <p className='text-2xl ml-4 '>We have sold over 30core product.</p>
                    </div>
                    <div className='flex items-center my-2'>
                    <FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl  ' icon={faCheckSquare}></FontAwesomeIcon>
                    <p className='text-2xl ml-4 '>Most dedicated, passionates team.</p>
                    </div>
                    <div className='flex items-center my-2'>
                    <FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl  ' icon={faCheckSquare}></FontAwesomeIcon>
                    <p className='text-2xl ml-4 '>Company has over 20000 workers.</p>
                    </div>
                    <div className='flex items-center my-2'>
                    <FontAwesomeIcon className='text-white bg-primary border-primary border-2 text-3xl  ' icon={faCheckSquare}></FontAwesomeIcon>
                    <p className='text-2xl ml-4 '>One of the most famous company.</p>
                    </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs