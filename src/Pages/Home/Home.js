import React from 'react';
import Highlights from './Highlights';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import LatestBlog from './LatestBlog';
import Tools from './Tools';
import UserReveiws from './UserReveiws';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Highlights></Highlights>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <UserReveiws></UserReveiws>
            <WhyChooseUs></WhyChooseUs>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;