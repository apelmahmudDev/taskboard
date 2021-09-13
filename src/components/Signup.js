import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../contexts/TaskContext";
const axios = require("axios");

const Signup = () => {
	const { user, setUser } = useContext(TaskContext);
	const [userPhoto, setUserPhoto] = useState({});
	const [message, setMessage] = useState("");
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	// load user photo with dynamic id
	useEffect(() => {
		const randomId = Math.round(Math.random() * 1000);
		const url = `https://picsum.photos/id/${randomId}/info`;
		axios
			.get(url)
			.then(function (response) {
				setUserPhoto(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	// handle signup auth
	const handleSignup = (e) => {
		const newUser = {
			...user,
			userImg: userPhoto.download_url,
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value.trim(),
			isSigned: true,
		};
		// checked user signed or not
		if (newUser.email !== user.email) {
			if (newUser.password.length >= 6) {
				setMessage("User Sign up successfully");
				setUser(newUser);
			} else {
				setMessage("Your password should be at least 6 characters!");
			}
		} else {
			if (newUser.password.length >= 6) {
				setMessage("This user already signed up");
			} else {
				setMessage("Your password should be at least 6 characters!");
			}
		}
		e.preventDefault();
	};

	return (
		<div className="bg-indigo-800 grid place-items-center h-screen p-5 px-4">
			<div className="w-full max-w-md border rounded border-gray-400 p-5">
				{/* title and message*/}
				<div className="text-center">
					<h1 className="text-white font-semibold text-4xl mb-5">Sign Up</h1>
					<div className="text-md font-bold text-green-500">{message}</div>
				</div>
				{/* sign up form */}
				<form onSubmit={handleSignup}>
					<div className="my-10 relative border border-gray-100 h-12">
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
					<div>
						<input name="isChecked" type="checkbox" />
						<label className="text-gray-100 ml-1">
							I accept the terms & conditions
						</label>
					</div>
					<div className="text-center">
						<input
							className="mt-5 bg-white hover:bg-gray-200 text-indigo-900 px-8 py-2 text-lg font-semibold cursor-pointer"
							type="submit"
							value="Sign Up"
						/>
					</div>
				</form>
				<div className="pt-5 flex justify-between">
					<span className="text-gray-100 tex-md mr-3">Have any account ?</span>
					<Link to="/login">
						<button className="text-gray-100 text-md hover:underline">
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
