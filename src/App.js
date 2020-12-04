import React, { useState } from 'react'
import './App.css';

function App() {
  const [blogPost, setBlogPost] = useState(null)
  const [postTime, setPostTime] = useState(null)
  const time = new Date();
  
  //function for setting the blog text in blog hook
  function changeHandler(e) {
    const value = e.target.value;
    setBlogPost(value);
    console.log(blogPost);
  }
  
  // function for submitting the data to the database
  function submitHandle(e) {
    e.preventDefault();
    setPostTime(time.toDateString());
    console.log(postTime);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-primary ">
        <span className="navbar-brand mb-0 h1 text-white">Blog-Site</span>
      </nav>
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
      {/* blog post card */}
      <div className="card mt-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div className="bg-light border-bottom">
          <p className="float-left m-1">{time.toDateString()}</p>
        </div>
        <p className="card-text">hi</p>
      </div>
    </div>
  );
}

export default App;
