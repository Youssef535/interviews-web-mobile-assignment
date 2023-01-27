import { useState, useEffect, React } from "react";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";

const API_URL = "https://jsonplaceholder.typicode.com/comments";

const Post = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const animation = useSpring({
    transform: showComments ? "translate3d(0,0,0)" : "translate3d(0,100%,0)",
    opacity: showComments ? 1 : 0,
  });

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(`${API_URL}?postId=${postId}`);
      setComments(data);
    };

    if (showComments) {
      fetchComments();
    }
  }, [showComments, postId]);

  return (
    <div>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      <animated.div style={animation}>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Post;
