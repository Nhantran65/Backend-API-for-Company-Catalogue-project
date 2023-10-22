"use client"
import MainLayout from "../layouts/MainLayout"
import RegistrationForm from "../components/RegistrationForm"

const RegisterPage: React.FC = () => {
    return (
      <MainLayout>
        <div className="max-w-md mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <RegistrationForm />
        </div>
      </MainLayout>
    );
  }
  
  export default RegisterPage;