"use client";

import React, {useState} from "react";
import Link from "next/link";

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setFormData((prevState) => ({...prevState, [name]: value}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Mockup of form validation. Expand as needed.
		if (formData.password !== formData.confirmPassword) {
			setErrors({
				...errors,
				confirmPassword: 'Passwords do not match!'
			});
		} else {
			// Send formData to server for registration...
		}
	};
	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label className="block">Username</label>
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={handleInputChange}
					className="p-2 border rounded w-full"
				/>
				{errors.username && <div className="text-red-500">{errors.username}</div>}
			</div>
			<div>
				<label className="block">Password</label>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
					className="p-2 border rounded w-full"
				/>
				{errors.password && <div className="text-red-500">{errors.password}</div>}
			</div>
			<div>
				<label className="block">Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleInputChange}
					className="p-2 border rounded w-full"
				/>
				{errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
			</div>
			<div>
				<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
			</div>
			<div className="mt-2 text-center">
				<p className="text-sm text-gray-600">
					Already have an account?{' '}
					<Link href="/login">
						<p className="font-medium text-indigo-600 hover:text-indigo-500">
							Sign in now
						</p>
					</Link>
				</p>
			</div>
		</form>
	);
}


export default RegistrationForm;
