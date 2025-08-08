import { Link } from "react-router-dom";
const posts = [
  { id: 1, title: "게시글1입니다." },
  { id: 2, title: "게시글2입니다." },
  { id: 3, title: "게시글3입니다." },
  { id: 4, title: "게시글4입니다." },
  { id: 5, title: "게시글5입니다." }
];
export default function PostList() {
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
