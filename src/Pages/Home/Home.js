import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import LatestBlog from './LatestBlog';
import Tools from './Tools';
import UserReveiws from './UserReveiws';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <UserReveiws></UserReveiws>
            <WhyChooseUs></WhyChooseUs>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;