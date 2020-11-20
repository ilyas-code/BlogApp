import React from 'react'
import './App.css';

function App() {



  return (
    <div className="App">
      <nav class="navbar navbar-light bg-primary ">
        <span class="navbar-brand mb-0 h1 text-white">Blog-Site</span>
      </nav>
      <form>
        <div className="card mt-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h1 className="card-header">Blog</h1>
          <div className="card-body"></div>
          <p class="card-text">Share your Thoughts</p>
          <textarea className=" form-control" rows="3" placeholder="Do Something Here..."></textarea>
          <button type="submit" className="btn btn-primary w-25 m-3"><i class="fa fa-paper-plane" aria-hidden="true">  Post</i></button>
        </div>
      </form>

    </div>
  );
}

export default App;
