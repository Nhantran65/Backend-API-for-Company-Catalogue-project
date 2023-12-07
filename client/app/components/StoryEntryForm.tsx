import React, {useState} from "react";


const StoryForm: React.FC = () => {
	const date = new Date();
	const [companyName, setcompanyName] = useState("");

	const [formData, setFormData] = useState({
		story_id: 1,  //autoincremented on
		company_id: 0, //input company name and cross check with backend
		user_id: 0,  //automated with profile made in the backend
		title: "",
		content: "",
		date_posted: "", //automated with basic post time.
		likes: 0, //set counter by clicking. per user
		status: "",
	});


	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value

		}));
	};

	const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const {name, value} = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);

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
		setcompanyName("");
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4 content-end p-4 md:p-5" id="storyForm">
			<div className="rounded-lg overflow-hidden">
				<div className="flex space-x-4">
					<div className="mt-3 w-1/2">
						<label className="block font-semibold">Company Name</label>
						<input
							type="text"
							name="company_id"
							value={companyName}
							onChange={handleInputChange}
							className="inline-flex items-center text-sm p-2.5 justify-center w-full border-3 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-50"
						/>
					</div>
					<div className="mt-3 w-1/2">
						<label className="block font-semibold">Story Title</label>
						<input
							type="text"
							name="title"
							value={formData.title}
							onChange={handleInputChange}
							className="inline-flex items-center text-sm p-2.5 justify-center w-full border-3 rounded-lg font-semibold cursor-pointer hover:text-gray-600 hover:bg-gray-50"
						/>
					</div>
				</div>
				<div className="mt-3">
					<label className="block font-semibold">Brief Description</label>
					<textarea
						name="content"
						rows={4}
						value={formData.content}
						onChange={handleTextAreaChange}
						className="inline-flex items-center gap-1 justify-center w-full border-3 rounded-lg font-semibold cursor-pointer hover:text-gray-600 hover:bg-gray-50"
					/>
				</div>
				<div className="mt-3 mb-3 ">
					<button type="submit" className="inline-flex items-center gap-1 justify-center py-2 px-4 border-3 rounded-lg font-semibold cursor-pointer hover:text-gray-600 hover:bg-gray-50">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2563EB" className="w-8 h-8 hover:opacity-300">
							<path
								fillRule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
								clipRule="evenodd"
							/>
						</svg>
						Publish
					</button>

				</div>
			</div>

		</form>
	);
};

export default StoryForm;
