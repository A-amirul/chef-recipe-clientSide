import React from 'react';

const Blogs = () => {
	return (
		<div className='mx-16 md:mx-24 my-8'>
			<div>
				<h2 className='text-2xl font-semibold py-4'>Tell us the differences between uncontrolled and controlled components.</h2>
				<p> <strong>Uncontrolled Components:</strong>
					<li>In an uncontrolled component, the form data is handled by the DOM itself, not by React.</li>
					<li>In an uncontrolled component, the input value is set by the user, and the component does not manage or change its value.</li>
					<li>Uncontrolled components use the ref attribute to access the value of the input or form element.</li>
					<li>Uncontrolled components can be useful when we need to access the value of a form field or input immediately or in some other way that does not fit the typical React data flow.
					</li>
					<strong>Controlled Components:</strong>
					<li>In a controlled component, the form data is managed by React itself, not by the DOM.</li>
					<li>In a controlled component, the input value is set and updated by the component's state, not by the user.</li>
					<li>Controlled components use the value attribute to set the value of the input or form element, and onChange event to update the state and re-render the component.</li>
					<li>Controlled components are useful when we need to validate or manipulate the data entered by the user, or when we need to update the component or other components based on changes to the input value.</li>
				</p>
			</div>
			<div>
				<h2 className='text-2xl font-semibold py-4'>How to validate React props using PropTypes</h2>
				<p> React provides a built-in library called PropTypes that allows us to validate the data types of the props that are passed to a component. Here's how to use PropTypes to validate React props: <br />

					<li>First, we need to install the prop-types library. we can do this by running the following command: npm install prop-types
					</li>
					<li>Next, import the PropTypes library at the top of the component file like this: import PropTypes from 'prop-types';</li>
					<li>Declare the component and its props: <li>PropTypes.string specifies that the name prop must be a string.
					</li>
						<li>PropTypes.isRequired specifies that the name prop is required and must be passed to the component.</li>
					</li>
					<li>Finally, we can use the component and pass props to it: If the prop types do not match the expected type or if a required prop is not provided, an error will be thrown in the browser console. Using PropTypes can help us catch errors early on in development and ensure that the components receive the correct data types.</li>
				</p>
			</div>
			<div>
				<h2 className='text-2xl font-semibold py-4'>Tell us the difference between nodejs and express js</h2>
				<p> Node.js is a runtime environment that allows developers to run JavaScript code on the server side, while Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications. <br />

					<li>Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js. Node.js provides the platform for executing JavaScript on the server-side, while Express.js provides a framework for building web applications using Node.js.
					</li>
					<li>Node.js is low-level and provides a basic set of features for building server-side applications, while Express.js is a higher-level framework that provides a wide range of features and tools for building web applications, such as middleware, routing, and templates.</li>
					<li>Node.js allows you to write your own custom logic for handling requests and responses, while Express.js provides a pre-built set of tools and methods for handling HTTP requests and responses, making it faster and easier to build web applications.</li>

					<li>Node.js can be used to build a wide range of applications, such as command-line tools, APIs, and web applications, while Express.js is specifically designed for building web applications.</li>
					<br />
					Node.js is a powerful runtime environment for executing JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of tools and features for building web applications quickly and easily.
				</p>
			</div>
			<div>
				<h2 className='text-2xl font-semibold py-4'>What is a custom hook, and why will you create a custom hook?</h2>
				<strong>Custom hooks:</strong>
				<p> Custom hooks allow you to encapsulate complex functionality and reuse it in multiple components throughout your application.
					A custom hook can be created to handle any logic that you want to extract from your components, such as handling form inputs, fetching data from an API, or managing component state. By creating a custom hook, you can make your code more reusable and easier to maintain. <br />
					<strong>There are several benefits of using custom hooks in React:</strong>
					<li> <strong>Reusability:</strong> Custom hooks allow you to extract and reuse logic across multiple components, reducing duplication and making your code more efficient.
					</li>
					<li> <strong>Abstraction: </strong>Custom hooks abstract away complex logic, making your components simpler and easier to read.</li>
					<li> <strong>Composition:</strong> Custom hooks can be composed together to build more complex functionality, allowing you to create more powerful abstractions and simplify your code.</li>
					<li> <strong>Testability: </strong>Custom hooks can be easily tested in isolation, making it easier to write tests for your components and ensure that they are functioning correctly.</li>
					<br />
					a custom hook is a reusable piece of logic that can be extracted from your components to improve code reusability, abstraction, composition, and testability. You would create a custom hook when you want to encapsulate complex logic and reuse it across multiple components throughout your application.
				</p>
			</div>
		</div>
	);
};

export default Blogs;