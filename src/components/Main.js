import React, { useContext, useState, useEffect } from "react";
import BlogPlate from "./BlogPlate";
import NavBar from "./NavBar";
import { authUser } from "../App"
import { useParams, Redirect } from "react-router-dom";

function Main() {
    const { username1 } = useParams();
    const authValue = useContext(authUser);
    
    // Setting Blog data for posting to server
    const [blogPost, setBlogPost] = useState({
        userName:username1,
        BlogText: null,
    });

    // Setting the Api data fetchecd from the server 
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
                const response = await fetch(`http://localhost:8000/getBlog/${username1}`, requestOptions)
                const result = await response.json();
                setApiData(result);
                // console.log(result);
            }
            catch (error) {
                console.log(error);
                // Setting some initial value to prevent forever loading
                setApiData({
                    _id: "",
                    userName: "",
                    BlogText: [
                        { id: 0, Text: "Connection Timed out please load again ", date: 0 },
    
                    ]
                });
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // Function for fetching the blog data of the user from the server by GET request
    async function GetData() {

        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        // fetching data of the user modammed
        try {
            const response = await fetch(`http://localhost:8000/getBlog/${username1}`, requestOptions)
            const result = await response.json();
            setApiData(result);
            // console.log(result);
        }
        catch (error) {
            console.log(error);
            // Setting some initial value to prevent forever loading
            setApiData({
                _id: "",
                userName: "",
                BlogText: [
                    { id: 0, Text: "Connection Timed out please load again ", date: 0 },

                ]
            });
        }
    }

    //function for setting the blog text in blog hook
    function ChangeHandler(e) {
        const value = e.target.value;
        setBlogPost({
            userName:username1,
            BlogText: value,
        });
        // console.log(blogPost);
    }

    // function for submitting the data to the database
    async function SubmitHandle(e) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(blogPost);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        try {
            const response = await fetch("http://localhost:8000/postBlog", requestOptions)
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.log("error occured", error);
        }
    }

    // function for delete the blog by requesting to the server
    async function DeleteHandle(e, deleteQuery) {
        var data = JSON.stringify(deleteQuery);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };
        try {
            const response = await fetch("http://localhost:8000/deleteBlog", requestOptions)
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.log(error);
        }

        GetData();
    }

    // Sorting the data fetched from the server for maping on the component


    // Mapping the fetched data to the resuable component
    if (apiData !== null) {
        const blogText = apiData.BlogText.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
        var blogArray = blogText.map((ele) => {
            return <BlogPlate
                key={ele.date}
                date={ele.date}
                Text={ele.Text}
                blogPost={blogPost}
                GetData={GetData}
                DeleteHandle={DeleteHandle}
            />;
        });
    } else {
        blogArray =
            <div>
                <div id="spinner" className="spinner-border " role="status">
                </div>
            </div>
    }


    return authValue.isAutheticated ? (
        <div>
            <NavBar />
            <form>
                <div
                    className="card mt-5"
                    style={{ maxWidth: "500px", margin: "0 auto" }}
                >
                    <h1 className="card-header">Blog</h1>
                    <div className="card-body">
                        <p className="card-text">Share your Thoughts</p>
                        <textarea
                            name="blogText"
                            style={{ resize: "none" }}
                            className="form-control"
                            rows="3"
                            placeholder="Do Something Here..."
                            onChange={ChangeHandler}
                        ></textarea>

                        <button
                            type="submit"
                            className="btn btn-primary w-25 mt-3 float-left"
                            onClick={SubmitHandle}
                        >
                            <i id="Post-ico" className="fa fa-paper-plane" aria-hidden="true">
                                <p>Post</p>
                            </i>
                        </button>
                    </div>
                </div>
            </form>

            <div className="flex-column">
                {blogArray}
            </div>
        </div>

    ):<Redirect to="/login"/>


}

export default Main
