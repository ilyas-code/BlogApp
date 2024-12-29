import React, { useEffect, useState } from "react";
import { Parser} from '@alkhipce/editorjs-react';
// import NavBarHome from "./NavBar-Home";
import { Card } from "react-bootstrap";
import {useParams } from "react-router-dom";

function BlogPage() {
  const params = useParams();
  console.log(params);
  const [apiData, setApiData] = useState({ content: "none" });
  // var {_id,content} = apiData
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
        // const result2 = JSON.stringify(result.content[0])
        setApiData(result.content);
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
     
      <Card className="container w-50" style={{marginTop:"100px"}}>
        {/* <Card.Text>{apiData.content[1]}</Card.Text> */}
       
         <Parser data={apiData} /> 
         
        
        
        {console.log(apiData)}
      </Card>
    </React.Fragment>
  );
}

export default BlogPage;
