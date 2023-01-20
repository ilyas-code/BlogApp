import React from "react";
import testImg from "./images/testImg.jpg";
import { Card, 
          Col, 
          // Button 
        } from "react-bootstrap";

function BlogPlateUser(props) {
  const { Text, date, blogPost, DeleteHandle } = props;
  const dateString = new Date(date);
  //delete Blog Query
  const deleteQuery = { userName: blogPost.userName, BlogText: { Text } };

  function RemoveBlog(e) {
    DeleteHandle(e, deleteQuery);
  }
  //function for resigtering like

  return (
    // <div className="card mt-5" style={{ margin: "2rem"}}>
    //     <div className="bg-light border-bottom flex-row">
    //         <p className="float-left m-1">{dateString.toDateString()}</p>

    //         <button type="submit" className="btn  pl-3 pr-3 p-1 float-right" onClick={RemoveBlog}>
    //             <i id="del-icon" className="fa fa-trash" aria-hidden="true"></i>
    //         </button>
    //     </div>
    //     <p className="card-text text-left p-2">{Text}</p>
    // </div>
    <React.Fragment>
      <Col>
        <Card style={{ cursor: "pointer" }}>
          <Card.Img
            variant="top"
            src={testImg}
            // style={{ width: "286px", height: "180px", backgroundSize: "cover" }}
          ></Card.Img>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>{Text}</Card.Text>
            <div>
              <i className="bi bi-suit-heart"></i>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{dateString.toDateString()}</small>
          </Card.Footer>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default BlogPlateUser;
