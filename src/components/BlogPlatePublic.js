import React from "react";
// import testImg from "./images/testImg.jpg";
import { Card, Col, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BlogPlatePublic(props) {
  const blogPost = props.blogPost;
  const likes = blogPost.likes.length;
  const dateString = new Date(blogPost.Date);

  const navigate = useNavigate();
  //delete Blog Query

  function handleCard(e) {
    e.preventDefault();
    navigate(`/BlogPage/${blogPost._id}`);
  }

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
        <Card
          style={{ cursor: "pointer", width: "100%", maxHeight: "30rem" }}
          className="text-left"
          onClick={handleCard}
        >
          <Card.Img
            variant="top"
            src={blogPost.coverImg}
            style={{ width: "auto", height: "160px", objectFit: "cover" }}
          ></Card.Img>
          <Card.Body>
            <Card.Title>{blogPost.title}</Card.Title>
            <Card.Text>{blogPost.summary}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Stack direction="horizontal" gap={1}>
              <small className="text-muted">{dateString.toDateString()}</small>
              <div className="ms-auto">
                <i className="bi bi-suit-heart"></i>
              </div>
              <div>{likes}</div>
            </Stack>
          </Card.Footer>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default BlogPlatePublic;
