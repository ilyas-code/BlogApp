import React, {
    useContext,
  
    // useState,
    // useEffect,
    useRef,
    useCallback,
  } from "react";
  import { Navigate } from 'react-router-dom';
  
  // import BlogPlateUser from "./BlogPlateUser";
  // import NavBar from "./NavBar";
 
  import { AuthContext } from "./AuthContext";
  // import { useParams } from "react-router-dom";
  // import { Navigate } from "react-router-dom";
  //React bootstrap
  import { Card, Button, ButtonGroup } from "react-bootstrap";
  import EditorPage from "./EditorPage";
  
  function Dashboard() {
    // const { username1 } = useParams();
    // const authValue = useContext(authUser);
    const editorCore = useRef(null);
    const {isAuthenticated} = useContext(AuthContext);
    

   
    // const [blogPost, setBlogPost] = useState({
  
    //   likes: ["ilyas"],
    //   reports: [""],
    //   UserName: "mohammed",
    //   Date: date,
    //   summary: "hi everyone read in",
    //   title: "good title",
    //   coverImg:
    //     "https://images.unsplash.com/photo-1563417994954-2736db3bf2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //   content: 0,
    // });
    // functions for saving the editor data to server
    const handleInitialize = useCallback((instance) => {
      editorCore.current = instance;
    }, []);
    
  //  function handleSave as evoke from the "PUBLISH" button saves editor js data and post's data to the server 
    const handleSave = useCallback(async () => {
      const savedData = await editorCore.current.save();
      console.log(savedData);
      const date = new Date();
      // const data = { userName: username1, BlogText: savedData };
      const data = {
        likes: [""],
        reports: [""],
        UserName: "mohammed",
        Date: date,
        summary: "hi everyone read in",
        title: "good title",
        coverImg:
          "https://images.unsplash.com/photo-1563417994954-2736db3bf2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: savedData,
      }
      // data.content = savedData;
      // setBlogPost((d)=>{ d = data; return d;});
      // console.log(data)
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify(data);
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "http://localhost:8000/postBlog",
          requestOptions
        );
        const result = await response.text();
        console.log("from submitHandle",result);
        alert("posted")
      } catch (error) {
        console.log("error occured", error);
        alert("server error")
      }
      
    },[]);
  
    // Setting Blog data for posting to server
    
  
    // Setting the Api data fetchecd from the server
    // const [apiData, setApiData] = useState(null);
  
    // // Refreshing the component after calling Blog data from the Api
    // useEffect(() => {
    //   async function fetchData() {
    //     var requestOptions = {
    //       method: "GET",
    //       redirect: "follow",
    //     };
    //     // fetching data of the user modammed
    //     try {
    //       const response = await fetch(
    //         `http://localhost:8000/getBlog/${username1}`,
    //         requestOptions
    //       );
    //       const result = await response.json();
    //       setApiData(result);
    //       // console.log(result);
    //     } catch (error) {
    //       console.log(error);
    //       // Setting some initial value to prevent forever loading
    //       setApiData({
    //         _id: "",
    //         userName: "A",
    //         BlogText: [
    //           { id: 0, Text: "Connection Timed out please load again ", date: 0 },
    //         ],
    //       });
    //     }
    //   }
    //   fetchData();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
  
    // Function for fetching the blog data of the user from the server by GET request
    // async function GetData() {
    //   var requestOptions = {
    //     method: "GET",
    //     redirect: "follow",
    //   };
    //   // fetching data of the user "mohammed"
    //   try {
    //     const response = await fetch(
    //       `http://localhost:8000/getBlog/${username1}`,
    //       requestOptions
    //     );
    //     const result = await response.json();
    //     setApiData(result);
    //     // console.log(result);
    //   } catch (error) {
    //     console.log(error);
    //     // Setting some initial value to prevent forever loading
    //     setApiData({
    //       _id: "",
    //       userName: "",
    //       BlogText: [
    //         { id: 0, Text: "Connection Timed out please load again ", date: 0 },
    //       ],
    //     });
    //   }
    // }
  
    //function for setting the blog text in blog hook
    // function ChangeHandler(e) {
    //   const value = e.target.value;
    //   setBlogPost({
    //     userName: username1,
    //     BlogText: value,
    //   });
    //   // console.log(blogPost);
    // }
  
    // function for submitting the data to the database
    // async function SubmitHandle(e) {
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
  
    //   var raw = JSON.stringify(blogPost);
  
    //   var requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };
    //   try {
    //     const response = await fetch(
    //       "http://localhost:8000/postBlog",
    //       requestOptions
    //     );
    //     const result = await response.text();
    //     console.log("from submitHandle",result);
    //   } catch (error) {
    //     console.log("error occured", error);
    //   }
    // }
  
    // function for delete the blog by requesting to the server
    // async function DeleteHandle(e, deleteQuery) {
    //   var data = JSON.stringify(deleteQuery);
  
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
  
    //   var requestOptions = {
    //     method: "DELETE",
    //     headers: myHeaders,
    //     body: data,
    //     redirect: "follow",
    //   };
    //   try {
    //     const response = await fetch(
    //       "http://localhost:8000/deleteBlog",
    //       requestOptions
    //     );
    //     const result = await response.text();
    //     console.log(result);
    //   } catch (error) {
    //     console.log(error);
    //   }
  
    //   GetData();
    // }
  
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
  
    return isAuthenticated ? (
      <>
    
        <div style={{width:"100%",padding:"30px"}}></div>
        <Card className="text-left m-5 p-0">
          <Card.Header
            className="p-1 text-center text-black-50"
            style={{ backgroundColor: "white" }}
          >
            <small>powered by editor js</small>
          </Card.Header>
          <Card.Header>
            <ButtonGroup aria-label="Basic example" className="float-end">
              <Button
                type="submit"
                variant="success"
                onClick={() => {
                  handleSave();
                  // SubmitHandle();
                }}
              >
                Publish
              </Button>
              <Button variant="dark">Cancel</Button>
            </ButtonGroup>
          </Card.Header>
          <Card.Body>
            <EditorPage handleInitialize={handleInitialize} />
          </Card.Body>
        </Card>
  
        {/* <form>
                  <div
                      className="card mt-5"
                      style={{ maxWidth: "500px", margin: "0 auto" }}
                  >
                      <h1 className="card-header">Blog</h1>
                      <div className="card-body">
                          <p className="card-text">Share your Thoughts</p>
                          <textarea
                              name="blogText"
                              style={{ resize: "none" }}
                              className="form-control"
                              rows="3"
                              placeholder="Do Something Here..."
                              onChange={ChangeHandler}
                          ></textarea>
  
                          <button
                              type="submit"
                              className="btn btn-primary w-25 mt-3 float-left"
                              onClick={SubmitHandle}
                          >
                              <i id="Post-ico" className="fa fa-paper-plane" aria-hidden="true">
                                  <p>Post</p>
                              </i>
                          </button>
                      </div>
                  </div>
              </form> */}
  
        {/* <div className=" w-75 mx-auto text-left" style={{border:"1px solid #b5b5b5",borderRadius:"5px"}}>
              <Row xs={1} lg={3} className="g-4">
                  
                  {blogArray}
              </Row>
              </div> */}
      </>
    ) :(<Navigate to="/login"/>);
  }
  
  export default Dashboard;
  