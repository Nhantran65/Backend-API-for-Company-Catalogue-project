"use client"
import React, {useState} from "react";
import Link from "next/link";

const LoginForm: React.FC = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		username: "",
		password: "",
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormData((prevState) => ({...prevState, [name]: value}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Mockup of form submission. In a real-world scenario, this would involve
		// sending the formData to the server, receiving a token, and storing it.
		const mockToken = "mock_token"; // This would come from your backend after successful login.
		localStorage.setItem("authToken", mockToken);
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
				{errors.username && (
					<div className="text-red-500">{errors.username}</div>
				)}
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
				{errors.password && (
					<div className="text-red-500">{errors.password}</div>
				)}
			</div>
			<div>
				<button
					type="submit"
					className="bg-blue-600 text-white px-4 py-2 rounded"
				>
					Login
				</button>
				<div className="mt-2 text-center">
					<p className="text-sm text-gray-600">
						Dont have an account?{' '}
						<Link href="/register">
							<p className="font-medium text-indigo-600 hover:text-indigo-500">
								Create one
							</p>
						</Link>
					</p>
				</div>
			</div>

		</form>
	);
};

export default LoginForm;
