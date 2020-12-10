import React, { useState, useEffect } from 'react'
import './App.css';
import BlogPlate from "./components/BlogPlate";
import NavBar from "./components/NavBar"

function App() {
  const [blogPost, setBlogPost] = useState(null)
  const [apiData, setApiData] = useState({
    _id: "",
    userName: '',
    BlogText: [
      {id:0, Text: 'loading', date: "2020-12-08T10:57:43.578Z"},
      { id:1,Text: 'loading', date: "2020-12-08T10:57:43.578Z"},
      { id:2,Text: 'loading', date: "2020-12-08T10:57:43.578Z"}
      
    ]
  })

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:8000/getBlog/mohammed", requestOptions)
      .then(response => response.json())
      .then(result =>  setApiData(result))
      .catch(error => console.log('error', error));


  }, [])

  // const time = new Date();
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(apiData.BlogText);
  //function for setting the blog text in blog hook
  function changeHandler(e) {

    const value = e.target.value;
    setBlogPost({
      userName: "mohammed",
      BlogText: value
    });
    console.log(blogPost);

  }

  // function for submitting the data to the database
  function submitHandle(e) {

  }

  const blogText = apiData.BlogText
  const blogArray = blogText.map((ele) => {
    return <BlogPlate key ={ele.id} time={ele.date} txt={ele.Text} />
  })

  // const blogArray = array.map((ele) => {
  //   return <BlogPlate key={ele} time={time} txt={ele} />
  // })

  return (
    <div className="App">

      <NavBar />

      <form>
        <div className="card mt-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h1 className="card-header">Blog</h1>
          <div className="card-body">
            <p className="card-text">Share your Thoughts</p>
            <textarea name="blogText" className=" form-control" rows="3" placeholder="Do Something Here..." onChange={changeHandler}></textarea>
            <button type="submit" className="btn btn-primary w-25 mt-3 float-left" onClick={submitHandle}>
              <i className="fa fa-paper-plane" aria-hidden="true"> Post</i>
            </button>
          </div>

        </div>
      </form>

      <div className="flex-column">
        {blogArray}
      </div>


    </div>
  );
}

export default App;
