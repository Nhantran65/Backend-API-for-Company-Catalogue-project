"use client";

import React from "react";
import CompanyListing from "../components/CompanyListing";
import MainLayout from "../layouts/MainLayout";

const CompanyListingPage = () => {
	return (
		<MainLayout>
			<div>
				<CompanyListing/>
			</div>
		</MainLayout>
	);
};

export default CompanyListingPage;
