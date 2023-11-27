"use client"
import MainLayout from "../layouts/MainLayout"
import StoryList from "../components/StoryList";

const StoryPage: React.FC = () => {
  

  return (
    <MainLayout>
      <div className="mt-2">
         <StoryList />
      </div>
    </MainLayout>
  );
}



export default StoryPage;