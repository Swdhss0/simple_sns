import Post from './Post'
import apiClient from "@/lib/apiClient";
import {useState ,useEffect} from 'react';

//useauth
import { useAuth } from "@/context/auth";

export default function Timeline() {
  const [postText, setPostText] = useState('');
  const [latestPosts, setLatestPosts] = useState([]);

  const {user} = useAuth();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const newPost = await apiClient.post("/posts/post", {
        content: postText,
        authorId: user.id,
      });
      setLatestPosts((prevPosts) => [newPost.data, ...prevPosts]);
      setPostText("");
    } catch(err) {
      console.log(err);
      alert('error');
    }
  };

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await apiClient.get("/posts/get_latest_post");
        setLatestPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLatestPosts();
  }, [])


  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="What's on your mind?"
              onChange={(e) => setPostText(e.target.value)}
              value={postText}
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-4 rounded"
            >
              投稿
            </button>
          </form>
        </div>

        {latestPosts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
      </main>
    </div>
    </>
  );
}

