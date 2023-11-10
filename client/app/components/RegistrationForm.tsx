"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      username: "",
      password: "",
      confirmPassword: "",
    };

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
      isValid = false;
    }
    // Add additional validation checks as needed

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    event.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails

    setIsLoading(true);
    try {
      const response = await axios.post("/sign-up", {
        username: formData.username,
        password: formData.password,
      });
      // Handle success (e.g., showing a success message, redirecting, etc.)
    } catch (error: any) {
      if (error.response) {
        // Server-side error
        setServerError(
          error.response.data.message ||
            "An error occurred during registration."
        );
      } else {
        // Network or other error
        setServerError(
          "The server may be unavailable. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
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
        <label className="block">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
        {errors.confirmPassword && (
          <div className="text-red-500">{errors.confirmPassword}</div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in now
            </p>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
