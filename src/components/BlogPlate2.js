import React, { useState, useEffect } from "react";
import BlogPlatePublic from "./BlogPlatePublic";
// import { Spinner } from "react-bootstrap";

function LoadingPage() {
  return (
    <div>
    

      <div class="card" aria-hidden="true">
        <div class="card-img-top" alt="..." ></div>
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          
        </div>
      </div>
    </div>
  );
}

function BlogPlate2() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Refreshing the component after calling Blog data from the Api
  useEffect(() => {
    let isMounted = true; // flag to track if the component is mounted

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
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (isMounted) {
          setApiData(result);
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
      isMounted = false; // cleanup function to set the flag to false when the component unmounts
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="w-100 pt-5"></div>
      <div className="container ">
        <div className="d-flex p-3 my-3 align-items-start text-bg-dark rounded shadow-sm">
          {/* <img className="me-3" src="../assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38"/> */}
          <div className="lh-1">
            <h1 className="h6 mb-0 text-white lh-1 text-start">BlogBox</h1>
            <small>Since 2020</small>
          </div>
        </div>
        <div className="my-3 p-3 bg-body rounded shadow-sm text-start divide-y">
          {/* <Row xs={1} sm={1} md={2} lg={4} className="g-4">
      {blogArray}
    </Row> */}

          <h6 className="p-0 m-0">Recent updates</h6>
          <div className="fmx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-5 gap-y-16 border-t border-gray-200 pt-2 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {loading ? (
              <LoadingPage />
            ) : (
              apiData.map((ele) => {
                return (
                  <BlogPlatePublic
                    key={ele._id}
                    blogPost={ele}
                    uid={ele._id}
                    UserName={ele.UserName}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPlate2;
