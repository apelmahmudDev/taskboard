import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../contexts/TaskContext";

const Login = () => {
	const { user } = useContext(TaskContext);
	const [message, setMessage] = useState("");
	const emailRef = useRef();
	const passwordRef = useRef();

	// handle login auth
	const handleLogin = (e) => {
		const existingUser = {
			...user,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			isSigned: true,
		};

		// checked existing user
		if (existingUser.email === user.email) {
			if (existingUser.password === user.password) {
				setMessage("User login successfully");
			} else {
				setMessage("Password do not match!");
			}
		} else {
			setMessage("You have no recorded, please create a new account");
		}
		e.preventDefault();
	};

	return (
		<div className="bg-indigo-800 grid place-items-center h-screen p-5 px-4">
			<div className="w-full max-w-md border rounded border-gray-400 p-5">
				{/* title and message*/}
				<div className="text-center">
					<h1 className="text-white font-semibold text-4xl mb-5">Login!</h1>
					<div className="text-md font-bold text-green-500">{message}</div>
				</div>
				{/* login form */}
				<form onSubmit={handleLogin}>
					<div className="my-10 relative border border-gray-100 h-12">
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
					<div className="mt-10 mb-3 relative border border-gray-100 h-12">
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
					<div className="flex justify-between flex-wrap">
						<div>
							<input name="isChecked" type="checkbox" />
							<label className="text-gray-100 ml-1">Remember me</label>
						</div>
						<p className="text-gray-100">Forget Password?</p>
					</div>
					<div className="text-center">
						<input
							className="mt-5 bg-white hover:bg-gray-200 text-indigo-900 px-8 py-2 text-lg font-semibold cursor-pointer"
							type="submit"
							value="Login"
						/>
					</div>
				</form>
				<div className="pt-5 flex justify-between flex-wrap">
					<span className="text-gray-100 tex-md mr-3">Create an account ?</span>
					<Link to="/signup">
						<button className="text-gray-100 text-md hover:underline">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
