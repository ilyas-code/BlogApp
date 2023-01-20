import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import NavBarHome from "./NavBar-Home";
import BlogPlatePublic from "./BlogPlatePublic";

import { Row, Spinner } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

function Home() {
  const [apiData, setApiData] = useState(null);

  // Refreshing the component after calling Blog data from the Api
  useEffect(() => {
    async function fetchData() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      // fetching data of the user modammed
      try {
        const response = await fetch(
          `http://localhost:8000/getBlogPublic`,
          requestOptions
        );
        const result = await response.json();
        setApiData(result);
        // console.log(result);
      } catch (error) {
        console.log(error);
        // Setting some initial value to prevent forever loading
        setApiData([
          {
            _id: 0,
            userName: "",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            likes: [],
            summary:"hello for summary",
            title: "Title",
            Date: new Date(),
            coverImg:
              "https://images.unsplash.com/photo-1582203914614-e23623afc345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80",
          },
        ]);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function that reveals card on top for reading further

  // Function for fetching the blog data of the user from the server by GET request
  async function GetData() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    // fetching data of the user "mohammed"
    try {
      const response = await fetch(
        `http://localhost:8000/getBlog/getBlogPublic`,
        requestOptions
      );
      const result = await response.json();
      setApiData(result);
      // console.log(result);
    } catch (error) {
      console.log(error);
      // Setting some initial value to prevent forever loading
      setApiData([
        {
          _id: "",
          userName: "",
          message: "server down",
          likes: [],
          Date: new Date(),
          title: "Title",
          coverImg:
            "https://images.unsplash.com/photo-1582203914614-e23623afc345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80",
        },
      ]);
    }
  }

  // Mapping the fetched data to the resuable component
  if (apiData !== null) {
    const blogText = apiData;
    console.log("from home ", blogText);
    var blogArray = blogText.map((ele) => {
      return (
        <BlogPlatePublic
          key={ele._id}
          blogPost={ele}
          GetData={GetData}
          uid={ele._id}
        />
      );
    });
  } else {
    blogArray = (
      <div className="container-fliud">
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <React.Fragment>
      <NavBarHome />
      <div className="mx-auto w-75">
        <Row xs={1} sm={1} md={2} lg={4} className="g-4">
          {blogArray}
        </Row>
      </div>
    </React.Fragment>
  );
}

// {/* <nav classNameName="navbar navbar-dark bg-primary">
//             <h1 classNameName="navbar-brand">Blog-App</h1>
//             <form classNameName="form-inline">
//                 <Link to='/signup'>
//                     <button className="btn btn-outline-light mr-3  my-sm-0" type="submit">Sign-Up</button>
//                 </Link>
//                 <Link to="/login">
//                     <button className="btn btn-outline-light  my-sm-0" type="submit">login</button>
//                 </Link>
//             </form>
//         </nav> */}

export default Home;
