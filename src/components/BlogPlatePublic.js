import React from "react";
// import testImg from "./images/testImg.jpg";
// import { Card, Col, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BlogPlatePublic(props) {
  const blogPost = props.blogPost;
  const likes = blogPost.likes.length;
  const dateString = new Date(blogPost.Date);
  const UserName = props.UserName;

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
      {/* <Col>
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
      </Col> */}

      {/* <div className="d-flex text-body-secondary pt-3" onClick={handleCard}>
        <svg
          className="bd-placeholder-img flex-shrink-0 me-2 rounded"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 32x32"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#007bff" />
          <text x="50%" y="50%" fill="#007bff" dy=".3em">
            32x32
          </text>
        </svg>

        <div className="pb-3 mb-0 small lh-sm border-bottom text-truncate">
          <strong className="d-block text-gray-dark">@{UserName}</strong>
          <small className="fw-normal text-end">
            {dateString.toDateString()}
          </small>

          <div>{blogPost.summary}</div>
        </div>
      </div> */}

      <div
        className="card text-bg-dark m-3 p-0"
        style={{ maxWidth: "20rem"}}
        onClick={handleCard}
      >
        <div className="card-header">{blogPost.title}</div>
        <div className="card-body">
          <p className="card-text text-truncate">{blogPost.summary}</p>
        </div>
      </div>

      {/* <div className="card m-3" style={{Width: "100%"}}  onClick={handleCard}>
        <div className="row g-0">
          <div className="col-md-1">
            <img src={blogPost.coverImg} className="img-fluid rounded-start" style={{height:"150px",width:"150px",objectFit:"cover"}}  alt="..."  />
          </div>
          <div className="col-md-11">
            <div className="card-body">
              <div className="card-title">
               <h5>{blogPost.title}</h5>
              <small className="fw-normal text-end">
               {dateString.toDateString()}
                </small> 
              </div>
              
              <p className="card-text text-truncate">
               {blogPost.summary}
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default BlogPlatePublic;
