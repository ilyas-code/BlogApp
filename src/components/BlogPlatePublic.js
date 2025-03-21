import React, { 
  // useState,
  // useEffect
 } from "react";
// import testImg from "./images/testImg.jpg";
// import { Card, Col, Stack } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";


function BlogPlatePublic(props) {
  // let [filledHeart, setFilledHeart] = useState("none");
  // let [filledChat, setFilledChat] = useState("none");
  // let [filledShare, setFilledShare] = useState("none");
  // let [filledBookmark, setFilledBookmark] = useState("none");
  const blogPost = props.blogPost;
 
  // const likes = blogPost.likes.length;
  const dateString = new Date(blogPost.Date);
  // const UserName = props.UserName;

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
      
      <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100" onClick={handleCard}>
      <div className="aspect-[4/3] relative">
        <img src={blogPost.coverImg || "/placeholder.svg"} alt={blogPost.title} className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gray-500 text-sm font-mono">{dateString.toDateString()}</span>
          <span className="text-blue-600 text-sm font-medium font-mono ">Philosophy</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-mono">{blogPost.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3 font-sans">{blogPost.summary}</p>
        <div className="flex items-center gap-3">
          <img src={blogPost.coverImg|| "/placeholder.svg"} alt={blogPost.UserName} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium text-gray-900 p-0 m-0">{blogPost.UserName}</p>
            <p className="text-gray-500 text-sm p-0 m-0">Writer</p>
          </div>
        </div>
      </div>
    </div>
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

      {/* <div className="card-header">{blogPost.title}</div>
        <div className="card-body">
          <p className="card-text text-truncate">{blogPost.summary}</p>
        </div> */}
      {/* <div className="relative container rounded-xl shadow-md flex flex-col p-2 antialiase" style={{ width: "18rem" }} >
        <img src={blogPost.coverImg} className="p-1 block rounded-xl object-cover h-96 w-96 " alt="..." />
        <div className="container p-0 h-32" onClick={handleCard}>
          <div className=" p-1 text-2xl font-semibold capitalize antialiased" >{blogPost.title}</div>
          <div className=" text-base p-1 line-clamp-3">{blogPost.summary}</div>
        </div>
        <div className="container p-0">
          <div className="flex  justify-between">
          <HeartIcon className="size-5 m-1 p-0" style={{fill:filledHeart}} onClick={(e)=>setFilledHeart("black")}/>
          <ChatBubbleBottomCenterTextIcon className="size-5 m-1 p-0 hover:fill-current" style={{fill:filledChat}} onClick={(e)=>setFilledChat("black")} />
          <ShareIcon className="size-5 m-1 p-0 hover:fill-current" style={{fill:filledShare}} onClick={(e)=>setFilledShare("black")} />
          <BookmarkIcon className="size-5 m-1 p-0 hover:fill-current" style={{fill:filledBookmark}} onClick={(e)=>setFilledBookmark("black")} />
        </div>
        </div>
        
      </div> */}
   
      {/* <article className="flex max-w-xl flex-col items-start justify-start shadow-md rounded-xl p-3 antialiased" onClick={handleCard}>
      <img src={blogPost.coverImg} className="m-0 block rounded-xl object-cover h-96 w-96 " alt="..." />
        <div className="flex items-center  gap-x-8 text-xs mt-3">
          <div className="text-gray-500">
            {dateString.toDateString()}
          </div>
          <Link className="relative z-10 no-underline rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 hover:no-underline">
            Philosophy
          </Link>
        </div>
        <div className="group relative">
          <h3 className=" text- font-semibold text-gray-900 group-hover:text-gray-600">
            <span className="absolute inset-0"></span>
            {blogPost.title}
          </h3>
          <p className="mt-1 line-clamp-3 text-sm/6 text-gray-600">
            {blogPost.summary}
          </p>
        </div>
        <div className="relative flex grow items-center gap-x-4 w-full">
          <img
            src={blogPost.coverImg}
            alt=""
            className="size-10 rounded-full bg-gray-50 place-self-end"
          />
          <div className="text-sm/6 place-self-end ">
            <p className="font-semibold text-gray-900 p-0 mb-0">
              <Link className="no-underline text-gray-900 hover:text-gray-600 hover:no-underline">  
                {blogPost.UserName}
               
              </Link> 
              
            </p>
            <p className="p-0 m-0 text-gray-600">Writer</p>
          </div>
        </div>
      </article> */}
      {/* </div> */}

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
