import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container blog-style'>
            <h1>What is the difference between <br/> javascript and nodejs ?</h1>
            <p>JavaScript VS Node.js boils down to the matter of a flexible and simple frontend programming language versus the framework that allows it to extend into the backend realm.<br/><br/>

JavaScript is a scripting language upon which most websites are based. It is often used in combination with HTML and CSS to render web pages, as JavaScript can be used to dynamically update HTML elements. It allows you to automatically refresh the page to update data, display information using cool visuals, and create interactive elements.<br/><br/>

Node.js is an environment that can run JavaScript code without a browser. It is built on Chrome’s V8 JavaScript engine. The Node.js environment can be run on OS X, Windows, and Linux. It also includes a multitude of JavaScript libraries, which allow developers to leverage open source components and tools to get their applications built faster.

</p>
            <h1>What is the differences between <br/> sql and nosql databases?
             </h1>
             <p>Provide High-Performance Capabilities<br/>
Handle Large Transactions with efficiency<br/>
SQL is easy to learn and manage<br/>
Open Source Programming Language<br/>
Supports Data Definition Language and Data Manipulation Language to query the databases<br/>
Suitable for every type of organization – large or small.</p>
             <p>NoSQL has higher scalability than other database management systems<br/>
NoSQL allows the distribution of data on more than just one device.<br/>
With NoSQL Database, you do not require specialized or complex hardware or storage solutions.<br/>
Does not require data normalization
Simple API for easy user interfaces
Can store unstructured, semi-structured, or structured data.</p>
             <h1>What is the purpose of <br/> JWT and how does it work?</h1>
             <p>JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.

The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism.<br/> Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.</p>
        </div>
    );
};

export default Blogs;