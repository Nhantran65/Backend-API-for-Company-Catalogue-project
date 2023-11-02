import React, { useState } from "react";
import Link from "next/link";
import { stories } from "../constants/constants";


const StoryForm: React.FC = () => {
  const date = new Date();
  
  const [formData, setFormData] = useState({
    story_id: 1,
    company_id: 0,
    user_id: 0,
    title: "",
    content: "",
    date_posted: "", 
    likes: 0, 
    status: "", 
  });
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    
   };
   const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

   };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    stories.push(formData);

    setFormData({
      story_id: 0,
      company_id: 0,
      user_id: 0,
      title: "",
      content: "",
      date_posted: "", 
      likes: 0, 
      status: "",
    });

    // Mockup of form submission. In a real-world scenario, this would involve
    // sending the formData to the server, receiving a token, and storing it.
    const mockToken = "mock_token"; // This would come from your backend after successful login.
    localStorage.setItem("authToken", mockToken);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="storyForm">
    <div className="rounded-lg overflow-hidden">
      <div className="mt-3">
        <label className="block">Company Id Number</label>
        <input
          type="number"
          name="company_id"
          value={formData.company_id}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mt-3">
        <label className="block">User Id Number</label>
        <input
          type="number"
          name="user_id"
          value={formData.user_id}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mt-3">
        <label className="block">Story Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mt-3">
        <label className="block">Brief Description</label>
        <textarea 
          name="content"
          rows="4"
          value={formData.content}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
          />
      </div>
      <div className="mt-3">
        <label className="block">Likes</label>
        <input
          type="number"
          name="likes"
          value={formData.likes}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>
      
      <div className="mt-3">
        <label className="block">Status</label>
        <select 
        name="status"
        onChange={handleSelect}
        className="p-2 border rounded w-full">
            <option value="Published">Published</option>
            <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className="block bg-purple-600 text-white font-bold px-4 py-2 rounded">
          Submit
        </button>
        </div>
        </div>
        
    </form>
  );
};

export default StoryForm;