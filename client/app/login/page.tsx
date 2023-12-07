"use client"

import MainLayout from '../layouts/MainLayout';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
	return (
		<MainLayout>
			<div className="max-w-md mx-auto mt-8">
				<h2 className="text-2xl font-bold mb-4">Login</h2>
				<LoginForm/>
			</div>
		</MainLayout>
	);
}

export default LoginPage;
