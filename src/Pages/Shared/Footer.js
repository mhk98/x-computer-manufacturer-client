import React from 'react';
// import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
<footer className='my-12'>
            <div className='footer p-10 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 ml-32'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Processor</a>
                    <a className="link link-hover">Graphics Card</a>
                    <a className="link link-hover">SSD</a>
                    <a className="link link-hover">Monitor</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;