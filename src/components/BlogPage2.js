
import React, { useEffect, useState, useContext } from "react";
import { Heart ,Share2,Trash,User,Calendar} from "lucide-react";
import { Parser } from '@alkhipce/editorjs-react';
import { useParams, 
    // useNavigate 
} from "react-router-dom";
// import { HeartIcon, CalendarIcon, UserIcon, ShareIcon } from "@heroicons/react/20/solid";
// import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "./AuthContext";

function BlogPage2(props) {
  const params = useParams();
  // const navigate = useNavigate();
  const { username } = useContext(AuthContext);
  const [apiData, setApiData] = useState({ content: "none" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:8000/getBlogPublicSpecific/${params.uid}`,
          {
            method: "GET",
            redirect: "follow",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (isMounted) {
          setApiData(result);
        console.log(result);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [params.uid]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

//   const handleDelete = async () => {
//     if (window.confirm("Are you sure you want to delete this blog post?")) {
//       try {
//         const response = await fetch(`http://localhost:8000/deleteBlog/${params.uid}`, {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           redirect: "follow",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to delete blog");
//         }

//         alert("Blog deleted successfully!");
//         navigate("/dashboard");
//       } catch (error) {
//         console.error("Error deleting blog:", error);
//         alert("Failed to delete blog. Please try again.");
//       }
//     }
//   };

//   const handleLike = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/likeBlog/${params.uid}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username }),
//         redirect: "follow",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update like");
//       }

//       setApiData(prevData => {
//         const userLiked = prevData.likes.includes(username);
//         return {
//           ...prevData,
//           likes: userLiked
//             ? prevData.likes.filter(user => user !== username)
//             : [...prevData.likes, username]
//         };
//       });
//     } catch (error) {
//       console.error("Error updating like:", error);
//       alert("Failed to update like. Please try again.");
//     }
//   };

  if (loading) {
  return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center text-red-600">Error: {error.message}</div>
        </div>
      </div>
    );
  }

  if (!apiData) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center text-gray-600">Blog not found</div>
        </div>
      </div>
    );
  }

  const isOwner = apiData.UserName === username;
  const publishDate = apiData.Date ? new Date(apiData.Date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : "Unknown date";

  return (
    <div className="min-h-screen bg-gray-50 py-16 max-sm:text-sm">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white rounded-xl border-2 border-gray-500 overflow-hidden">
          {/* Header */}
          <div className="p-3 border-b border-gray-400 text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {apiData.title || "Untitled"}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-2 max-sm:justify-evenly">
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  
                  <User className="h-5 w-5 mr-2 text-gray-500"/>
                  <span>{apiData.UserName}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{publishDate}</span>
                </div>
                {apiData.likes?.length > 0 && (
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <Heart className="h-5 w-5 mr-2 text-red-500" />
                    <span className="font-medium text-gray-700">{apiData.likes.length} {apiData.likes.length === 1 ? 'like' : 'likes'}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors relative group"
                >
                  {apiData.likes?.includes(username) ? (
                    // <HeartIcon className="h-6 w-6 text-red-500" />
                    <Heart />
                  ) : (
                    <Heart className="h-6 w-6 text-gray-400 hover:text-red-500" />
                  )}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {apiData.likes?.includes(username) ? 'Unlike' : 'Like'}
                  </span>
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors group relative"
                >
                  
                  <Share2 className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
                  {copied && (
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
                      Copied!
                    </span>
                  )}
                </button>
                {isOwner && (
                  <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    
                    <Trash className="h-6 w-6 text-gray-400 hover:text-red-500" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 prose max-w-none text-left ">
            <Parser data={apiData.content} />
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPage2;