import React, { useRef, useState } from "react";

const Signup = () => {
	const [signupUser, setSignupUser] = useState({});

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const checkRef = useRef();

	// handle signup
	const handleSignup = (e) => {
		e.preventDefault();
		const newUser = {
			...signupUser,
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		setSignupUser(newUser);
	};

	console.log(signupUser);

	return (
		<div className="px-4 bg-indigo-800 grid place-items-center h-screen">
			<div className="w-full max-w-md">
				{/* title */}
				<div className="text-center">
					<h1 className="text-white font-semibold text-4xl mb-12">Sign Up</h1>
				</div>
				{/* sign up form */}
				<form onSubmit={handleSignup}>
					<div className="my-11 relative border border-gray-100 h-12">
						<label className="absolute top-0 left-3 transform -translate-y-4 bg-indigo-800 px-1 block text-gray-100 text-md">
							Username
						</label>
						<input
							type="text"
							ref={nameRef}
							className="bg-indigo-800 outline-none h-full w-full px-4 text-gray-300 text-lg"
							placeholder="Enter name"
							required
						/>
					</div>
					<div className="my-11 relative border border-gray-100 h-12">
						<label className="absolute top-0 left-3 transform -translate-y-4 bg-indigo-800 px-1 block text-gray-100 text-md">
							Email Address
						</label>
						<input
							type="email"
							ref={emailRef}
							className="bg-indigo-800 outline-none h-full w-full px-4 text-gray-300 text-lg"
							placeholder="abcd@gmail.com"
							required
						/>
					</div>
					<div className="mt-11 mb-3 relative border border-gray-100 h-12">
						<label className="absolute top-0 left-3 transform -translate-y-4 bg-indigo-800 px-1 block text-gray-100 text-md">
							Password
						</label>
						<input
							type="password"
							ref={passwordRef}
							className="bg-indigo-800 outline-none h-full w-full px-4 text-gray-300 text-lg"
							placeholder="Enter password"
							required
						/>
					</div>
					<div>
						<input
							name="isChecked"
							type="checkbox"
							ref={checkRef}
							// checked={this.state.isGoing}
							// onChange={this.handleInputChange}
						/>
						<label className="text-gray-100 ml-1">
							I accept the terms & conditions
						</label>
					</div>
					<div className="text-center">
						<input
							className="my-11 bg-white hover:bg-gray-200 text-indigo-900 px-8 py-2 text-lg font-semibold cursor-pointer"
							type="submit"
							value="Sign Up"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;