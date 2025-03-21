import React, { useState, useEffect } from "react";
import BlogPlatePublic from "./BlogPlatePublic";
// import { Spinner } from "react-bootstrap";

function LoadingPage() {
  return (
    <div>
      <div className="card" aria-hidden="true">
        <div className="card-img-top h-96 w-96 bg-slate-300" alt="..."></div>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
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
      <div className="w-full"></div>
      <div className="absolute container top-20 float inset-0 ">
        <div className="bg-gray-900 d-flex p-3 my-3 align-items-start text-white rounded shadow-sm ">
          {/* <img className="me-3" src="../assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38"/> */}
          <div className="lh-1">
            <h1 className="h6 mb-0 text-white lh-1 text-start ">BlogBox</h1>
            <small>Since 2020</small>
          </div>
        </div>
        <div className=" my-3 p-3 bg-body text-white rounded shadow-sm text-start divide-y  ">
          {/* <Row xs={1} sm={1} md={2} lg={4} className="g-4">
      {blogArray}
    </Row> */}

          <h6 className="p-0 m-0">Recent updates</h6>
          {/* <div className="fmx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-5 gap-y-16 border-t border-gray-200 pt-2 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
          </div> */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Warm Welcome to BlogBox
              </h2>
              <p className="text-lg text-gray-600">
                Write your compelling stories here...
              </p>
            </div>
            {loading ? (
              <LoadingPage />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {apiData.map((post) => (
                  <BlogPlatePublic key={post._id} 
                  blogPost={post}
                  uid={post._id}
                  UserName={post.UserName} /> 
                ))}
                </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default BlogPlate2;
