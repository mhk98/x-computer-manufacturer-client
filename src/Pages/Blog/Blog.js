import React from 'react';

const Blog = () => {
    return (
        <div className='flex items-center text-left'>
            <h2 className='text-xl font-bold'>Q1. How will you improve the performance of a React Application?</h2>
            <p>React Application isn't a rocket science. Before starting programming hero course. I have no idea about the react application programming. But not like that I have 0 knowledge about programming. I know programming is so tough job. But I have beleve about myself and I have a minset to work hard. I think for improve in any programming need to hard working. There is no shortcart.</p>
            <h2 className='text-xl font-bold'>Q2. What are the different ways to manage a state in a React application?</h2>
            <p>Five types of state in react application. Now I discuss right now location state. Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.</p>
            <p>Unlike Data and Communication state, which follow a particular pattern or a shape to store information, location state instead stores information in a simple string like structure. However, one of the most interesting things about location states is that it typically stores URLs in the forms of string-like structures even when they don’t actually represent strings.</p>
            <h2 className='text-xl font-bold'>Q3. How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <h2 className='text-xl font-bold'>Q4. Why you do not set the state directly in React?</h2>
            <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
            <h2 className='text-xl font-bold'>Q5. What is a unit test? Why should write unit tests?</h2>
            <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers.</p>

            <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
        </div>
    );
};

export default Blog;