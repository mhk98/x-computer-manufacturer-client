import React from 'react';

import facebook from '../../image/icon/facebook.png'
import linkedin from '../../image/icon/linkedin.png'

const Footer = () => {
    return (
        <footer class="footer p-10 bg-[#2C313C] text-white my-8 ">

<div>
    <span class=" text-3xl text-white mb-4">Manufacture</span> 
    <a class="link link-hover text-xl">Get in Touch</a>
    <div className='flex gap-1'>
    <a class="link bg-slate-200 p-2 border border-black hover:bg-slate-400"><img className='w-8 h-8' src={facebook} alt="facebook" /></a>
    <a class="link bg-slate-200 p-2 border border-black hover:bg-slate-400"><img className='w-8 h-8' src={linkedin} alt="linkedin" /></a>
    </div>
    
  </div>

  <div>
    <span class=" text-2xl text-white mb-4">How its works</span> 
    <a class="link link-hover">Computer Manufacture</a>
    <a class="link link-hover">Manufacture House</a>
    <a class="link link-hover">Wholesale</a>
    <a class="link link-hover">Retail</a>
  </div>
  <div>
    <span class=" text-2xl text-white mb-4">Categories</span> 
    <a class="link link-hover">Monitor</a>
    <a class="link link-hover">Keyboard</a>
    <a class="link link-hover">Mouse</a>
    <a class="link link-hover">Processor</a>
    <a class="link link-hover">SSD</a>
  </div> 
  <div>
    <span class=" text-2xl text-white mb-4">Skills</span> 
    <a class="link link-hover">Html</a>
    <a class="link link-hover">CSS</a>
    <a class="link link-hover">ReactJs</a>
    <a class="link link-hover">ExpressJs</a>
    <a class="link link-hover">MongoDB</a>
  </div> 
  <div>
    <span class=" text-2xl text-white mb-4">Information</span> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </div>
</footer>
            
    );
};

export default Footer;