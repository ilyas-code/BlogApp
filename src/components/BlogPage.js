import React, { useEffect, useState } from "react";
import NavBarHome from "./NavBar-Home";
import { Card } from "react-bootstrap";
import {useParams } from "react-router-dom";

function BlogPage() {
  const params = useParams();
  console.log(params);
  const [apiData, setApiData] = useState({ content: "none" });
  var {id2,content2} = apiData
  useEffect(() => {
    async function fetchData() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      // fetching data of the user modammed
      try {
        const response = await fetch(
          `http://localhost:8000/getBlogPublicSpecific/${params.uid}`,
          requestOptions
        );
        const result = await response.json();
        console.log(result);
        
        setApiData(result);
        // console.log(result);
      } catch (error) {
        console.log(error);
        // Setting some initial value to prevent forever loading
        setApiData(
          {
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          },
        );
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <NavBarHome />
      <Card className="mx-auto w-75 text-left">
        <Card.Text>{content2}</Card.Text>
      </Card>
    </React.Fragment>
  );
}

export default BlogPage;
