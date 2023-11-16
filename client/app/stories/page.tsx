"use client"
import MainLayout from "../layouts/MainLayout"
import StoryList from "../components/StoryList";
import AddStory from "./AddStory";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from 'react-bootstrap/Container'; 
  
import TagInput from "../components/TagsFile/TagInput";

const StoryPage: React.FC = () => {

  return (
    <MainLayout>
      <AddStory />
      <StoryList />
    </MainLayout>
  );
}

export default StoryPage;