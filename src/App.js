import React, { useState, useEffect } from "react";
import "./App.css";
import BlogPlate from "./components/BlogPlate";
import NavBar from "./components/NavBar";

function App() {
  const [blogPost, setBlogPost] = useState({
    userName: "mohammed",
    BlogText: "ex",
  });
  const [apiData, setApiData] = useState({
    _id: "",
    userName: "",
    BlogText: [
      { id: 0, Text: "loading", date: 0 },
      
    ]
  });

  // calling Blog data from the Api
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    // fetching data of the user modammed
    fetch("http://localhost:8000/getBlog/mohammed", requestOptions)
      .then((response) => response.json())
      .then((result) => setApiData(result))
      .catch((error) => console.log("error", error));
  }, []);

  // const time = new Date();
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  //function for setting the blog text in blog hook
  function changeHandler(e) {
    const value = e.target.value;
    setBlogPost({
      userName: "mohammed",
      BlogText: value,
    });
  }

  // function for submitting the data to the database
  function submitHandle(e) {
    var data = JSON.stringify(blogPost);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        alert(this.responseText);
      }
    });

    xhr.open("POST", "http://localhost:8000/postBlog");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

    

    console.log("ticks");
  }

  const blogText = apiData.BlogText.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  const blogArray = blogText.map((ele) => {
    return <BlogPlate key={ele.date} date={ele.date} Text={ele.Text} blogPost={blogPost} />;
  });

  // const blogArray = array.map((ele) => {
  //   return <BlogPlate key={ele} time={time} txt={ele} />
  // })

  return (
    <div className="App">
      <NavBar />

      <form>
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
              onChange={changeHandler}
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary w-25 mt-3 float-left"
              onClick={submitHandle}
            >
              <i className="fa fa-paper-plane" aria-hidden="true">
                {" "}
                Post
              </i>
            </button>
          </div>
        </div>
      </form>

      <div className="flex-column">{blogArray}</div>
    </div>
  );
}

export default App;
