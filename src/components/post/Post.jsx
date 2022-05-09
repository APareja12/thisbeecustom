import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/712193/pexels-photo-712193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bee"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Gardening</span>
          <span className="postCat">Bees</span>
        </div>
        <span className="postTitle">Plants</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}