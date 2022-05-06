import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src=""
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Gardening</span>
          <span className="postCat">Bees</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}