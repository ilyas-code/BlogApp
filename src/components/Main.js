import React, { useContext, useCallback } from "react";
import MainNav from "./MainNav"
import { authUser } from "../App";
import { Navigate, Outlet } from "react-router-dom";
import { postBlogPost, deleteBlogPost } from "../api/api";

function Main() {

  const authValue = useContext(authUser);

  // const editorCore = useRef(null);

//   const date = new Date();
//   // const [blogPost, setBlogPost] = useState({

//   //   likes: ["ilyas"],
//   //   reports: [""],
//   //   UserName: "mohammed",
//   //   Date: date,
//   //   summary: "hi everyone read in",
//   //   title: "good title",
//   //   coverImg:
//   //     "https://images.unsplash.com/photo-1563417994954-2736db3bf2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   //   content: 0,
//   // });
//   // functions for saving the editor data to server
//   const handleInitialize = useCallback((instance) => {
//    editorCore.current = instance;
//   }, []);
  

//   const handleSave = useCallback(async () => {
//     // const savedData = await editorCore.current.save();
//     // The code is commented out because there is no editorCore ref
      
//     const savedData = {}; //delete this line when editorCore ref is working.
//     console.log(savedData);
//     // const data = { userName: username1, BlogText: savedData };
//     const data = {
//       likes: [""],
//       reports: [""],
//       UserName: "mohammed",
//       Date: date,
//       summary: "hi everyone read in",
//       title: "good title",
//       coverImg:
//         "https://images.unsplash.com/photo-1563417994954-2736db3bf2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//       content: savedData,
//     }
//     // data.content = savedData;
//     // setBlogPost((d)=>{ d = data; return d;});
//     // console.log(data)
    
//     try {
//        await postBlogPost(data);
//        alert("posted");
//     } catch (error) {
//       console.log("error occured", error);
//       alert("server error");
//     }

    
//   }, []);
  
    // Function for delete the blog by requesting to the server
  async function DeleteHandle(e, deleteQuery) {
    try {
       await deleteBlogPost(deleteQuery);
    } catch (error) {
      console.log(error);
    }

   
    //   GetData();
  }

  // Sorting the data fetched from the server for maping on the component

  // Mapping the fetched data to the resuable component
  // if (apiData !== null) {
  //   const blogText = apiData.sort(function(a, b) {
  //     return new Date(b.Date) - new Date(a.Date);
  //   });
  //   var blogArray = blogText.map((ele) => {
  //     return (
  //       <BlogPlateUser
  //         key={ele.date}
  //         date={ele.date}
  //         Text={ele.Text}
  //         blogPost={blogPost}
  //         GetData={GetData}
  //         DeleteHandle={DeleteHandle}
  //       />
  //     );
  //   });
  // } else {
  //   blogArray = (
  //     <div>
  //       <div id="spinner" className="spinner-border " role="status"></div>
  //     </div>
  //   );
  // }

  return authValue.isAuthenticated ? (
    <div style={{height:"100vh"}}>
      <MainNav/>
      <Outlet/>
    </div>
  ) : (
    <Navigate to="/Home" replace={true} />
  );
}

export default Main;
