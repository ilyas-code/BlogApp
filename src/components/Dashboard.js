import React, {
  useContext,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  PencilIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import EditorPage from "./EditorPage";


function Dashboard() {
  
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState("title");
  const editorCore = useRef(null);
  const { isAuthenticated, username } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleInitialize = useCallback((instance) => {
    if (instance) {
      editorCore.current = instance;
      const savedContent = localStorage.getItem("editorContent");
      if (savedContent) {
        try {
          const parsedContent = JSON.parse(savedContent);
          if (typeof instance.render === "function") {
            instance.render(parsedContent);
          }
        } catch (error) {
          console.log("Could not load saved content:", error);
        }
      }
    }
  }, []);

  const saveEditorContent = useCallback(async () => {
    try {
      if (editorCore.current && typeof editorCore.current.save === "function") {
        const savedData = await editorCore.current.save();
        localStorage.setItem("editorContent", JSON.stringify(savedData));
        console.log("Editor content saved");
      }
    } catch (error) {
      console.log("Could not save editor content:", error);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (editorCore.current && typeof editorCore.current.save === "function") {
        saveEditorContent();
      }
    };
  }, [saveEditorContent]);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(
          `https://4000-idx-blogbackendgit-1746362214736.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev/getBlog/${username}`,
          {
            method: "GET",
            redirect: "follow",
          }
        );

        const textResponse = await response.text();

        try {
          const result = JSON.parse(textResponse);
          console.log("Fetched blog data:", result);
          if (isMounted) {
            setApiData(Array.isArray(result) ? result : [result]);
            setLoading(false);
          }
        } catch (parseError) {
          console.error("Server response:", textResponse);
          throw new Error(textResponse || "Failed to load blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    }

    if (username) {
      fetchData();
    } else {
      setLoading(false);
      setError(new Error("No username provided"));
    }

    return () => {
      isMounted = false;
    };
  }, [username]);

  function handleTitle(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleSave = useCallback(async () => {
    if (!editorCore.current) return;

    try {
      const savedData = await editorCore.current.save();
      const date = new Date();

      const data = {
        likes: [""],
        reports: [""],
        UserName: username,
        Date: date,
        summary: "hi everyone read in",
        title: title,
        coverImg:
          "https://images.unsplash.com/photo-1563417994954-2736db3bf2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: savedData,
      };

      const response = await fetch(`https://4000-idx-blogbackendgit-1746362214736.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev/postBlog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error("Failed to post blog");
      }

      const result = await response.text();
      console.log("from submitHandle", result);
      alert("posted");

      const refreshResponse = await fetch(
        `https://4000-idx-blogbackendgit-1746362214736.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev/getBlog/${username}`,
        {
          method: "GET",
          redirect: "follow",
        }
      );
      if (!refreshResponse.ok) {
        throw new Error("Failed to refresh blog list");
      }
      const refreshedData = await refreshResponse.json();
      setApiData(
        Array.isArray(refreshedData) ? refreshedData : [refreshedData]
      );

      setTitle("title");
    } catch (error) {
      console.log("error occurred", error);
      alert("server error");
    }
  }, [title, username]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  function handleBlogClick(blogId) {
    navigate(`/${username}/${blogId}`);
  }

  return (
    <div className="flex flex-row relative">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-[2rem] translate-y-1/2 left-0 z-50 p-2 rounded-r-md bg-gray-900 text-white hover:bg-gray-800"
      >
        {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 top-0 z-10 transition-transform duration-300 ease-in-out flex flex-col text-white w-[300px] h-screen bg-zinc-900 overflow-y-auto`}
      >
        <div className="pt-16 px-2 ">
          <h2 className="block text-base font-medium mb-3 py-4 text-center text-gray-200 border-b border-gray-700 ">
            My Blogs
          </h2>

          <div className="space-y-1">
            {loading ? (
              <div className="text-center py-4 text-gray-400">Loading...</div>
            ) : error ? (
              <div className="text-center py-4 text-red-400">
                {error.message === "user not found" ? (
                  <div>
                    <p>Welcome! Start by creating your first blog post.</p>
                    <p className="text-xs mt-1 text-gray-500">
                      No blogs found for this user yet
                    </p>
                  </div>
                ) : (
                  error.message
                )}
              </div>
            ) : apiData ? (
              (Array.isArray(apiData) ? apiData : [apiData]).length > 0 ? (
                (Array.isArray(apiData) ? apiData : [apiData]).map((blog) => (
                  <div
                    key={blog._id}
                    className="p-1 hover:bg-gray-800 rounded-md cursor-pointer transition-colors m-0"
                    onClick={() => handleBlogClick(blog._id)}
                  >
                    <h3 className="block text-sm font-medium truncate text-left text-gray-200">
                      {blog.title || "Untitled"}
                    </h3>
                    <p className="block text-xs text-gray-400 truncate text-left">
                      Last edited:{" "}
                      {blog.Date
                        ? new Date(blog.Date).toLocaleDateString()
                        : "Unknown date"}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-400">
                  No blogs found
                </div>
              )
            ) : (
              <div className="text-center py-4 text-gray-400">
                No data available
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-[300px]" : "ml-0"
        }`}
      >
        <div className="container relative top-20 rounded-md border-2 border-gray-200 divide-y justify-self-center w-100 max-w-75 max-sm:text-sm">
          <div className="lg:flex justify-end items-baseline">
            <input
              type="text"
              onChange={handleTitle}
              className="p-2 px-4 focus:border-none bg-inherit w-full inline-block text-3xl text font-semibold"
              placeholder="Title"
            />

            <div className="flex m-0 p-2 max-sm:justify-center">
              <span className="hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500 "
                >
                  <PencilIcon className="-ml-0.5 mr-1.5 size-5 text-gray-400" />
                  Edit
                </button>
              </span>

              <span className="sm:ml-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSave}
                >
                  <CheckIcon className="-ml-0.5 mr-1.5 size-5" />
                  Publish
                </button>
              </span>

              <Menu as="div" className="relative ml-3 sm:hidden">
                <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                  More
                  <ChevronDownIcon className="-mr-1 ml-1.5 size-4 text-gray-400" />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Edit
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      View
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <div className="text-left p-0 m-0 w-auto">
            <EditorPage handleInitialize={handleInitialize} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
