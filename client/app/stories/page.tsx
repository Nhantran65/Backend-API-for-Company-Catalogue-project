"use client"
import MainLayout from "../layouts/MainLayout"
import StoryList from "../components/StoryList";
import StoryForm from "../components/StoryEntryForm";
import 'bootstrap/dist/css/bootstrap.css'; 

const StoryPage: React.FC = () => {

  return (
    <MainLayout>
      <div className="mx-32 shrink-0 ">
         <div className="max-w-xl ml-20 mt-3 content-center">
         <h2 className="text-2xl font-semibold "> + Add Stories</h2>
         <StoryForm />
        </div>
      </div>
      
      <div className="mt-2">
         <StoryList />
      </div>
      
    </MainLayout>
  );
}



export default StoryPage;