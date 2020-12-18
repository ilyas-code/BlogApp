import React from 'react'

function BlogPlate(props) {
    const { Text, date, blogPost, DeleteHandle } = props;
    const dateString = new Date(date);
    //delete Blog Query
    const deleteQuery = { userName: blogPost.userName, BlogText: { Text } };


    function RemoveBlog(e) {
        DeleteHandle(e, deleteQuery)

    }

    return (
        <div className="card mt-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
            <div className="bg-light border-bottom flex-row">
                <p className="float-left m-1">{dateString.toDateString()}</p>

                <button type="submit" className="btn  pl-3 pr-3 p-1 float-right" onClick={RemoveBlog}>
                    <i id="del-icon" className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
            <p className="card-text text-left p-2">{Text}</p>
        </div>
    )
}

export default BlogPlate
