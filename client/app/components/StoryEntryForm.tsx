import React, { useState } from "react";
import Link from "next/link";
import { stories } from "../constants/constants";
import { v4 as uuidv4 } from 'uuid';

const StoryForm: React.FC = () => {
  const date = new Date();
  
  //.find((stories) => stories.featured);


  const [formData, setFormData] = useState({
    Id: uuidv4(),
    Company_id: 0,
    User_id: 0,
    Title: "",
    Content: "",
    Posted: date, 
    Likes: 0, 
    Status: "", 
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

    // Mockup of form submission. In a real-world scenario, this would involve
    // sending the formData to the server, receiving a token, and storing it.
    const mockToken = "mock_token"; // This would come from your backend after successful login.
    localStorage.setItem("authToken", mockToken);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="storyform">
    <div className="rounded-lg overflow-hidden">
      <div className="mt-3">
        <label className="block">Company Id Number</label>
        <input
          type="text"
          name="Company_id"
          value={formData.Company_id}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mt-3">
        <label className="block">User Id Number</label>
        <input
          type="text"
          name="User_id"
          value={formData.User_id}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mt-3">
        <label className="block">Story Title</label>
        <input
          type="text"
          name="Title"
          value={formData.Title}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mt-3">
        <label className="block">Brief Description</label>
        <textarea 
          name="Content"
          rows="4"
          value={formData.Content}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
          />
      </div>
      <div className="mt-3">
        <label className="block">Likes</label>
        <input
          type="number"
          name="Likes"
          value={formData.Likes}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>
      
      <div className="mt-3">
        <label className="block">Status</label>
        <select 
        name="Status"
        value={formData.Status}
        onChange={handleSelect}
        className="p-2 border rounded w-full">
            <option>Published</option>
            <option>Pending</option>
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
