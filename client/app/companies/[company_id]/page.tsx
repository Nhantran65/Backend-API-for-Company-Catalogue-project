"use client";
import CompanyDetails from "@/app/components/CompanyDetails";
import MainLayout from "@/app/layouts/MainLayout";
import React from "react";
import {useParams} from "next/navigation";
import {companies, stories} from "@/app/constants/constants";


export type Story = {
	story_id: number;
	company_id: number;
	user_id: number;
	title: string;
	content: string;
	date_posted: string;
	likes: number;
	status: any
};
const CompanyPage = () => {
	const {company_id} = useParams() as any;


	const company = companies.find(comp => comp.company_id === parseInt(company_id));
	const comp_stories = stories.filter(story => story.company_id === parseInt(company_id));
	console.log(comp_stories)
	return (
		<MainLayout>
			<CompanyDetails data={company} stories={comp_stories}/>
		</MainLayout>
	);
};

export default CompanyPage;
