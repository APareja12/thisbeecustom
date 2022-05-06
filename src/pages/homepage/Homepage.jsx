// import { useLocation } from "react-router";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {

  return (
    <>
      <Header />
    <div className="home">
      homepage
     
        <Posts />
        <Sidebar />
      
    </div>
    </>
  );
}