import React from 'react'

function BlogPlate(props) {
    const { Text, date, blogPost } = props;
    const dateString = new Date(date);
    //delete Blog Query
    const deleteQuery = { userName: blogPost.userName, BlogText: { Text } };

    function DeleteHandle(e) {
        
        var data = JSON.stringify(deleteQuery);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
            }
        });

        xhr.open("DELETE", "http://localhost:8000/deleteBlog");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    }

    return (
        <div className="card mt-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
            <div className="bg-light border-bottom flex-row">
                <p className="float-left m-1">{dateString.toDateString()}</p>

                <button type="submit" className="btn btn-danger pl-3 pr-3 p-1 float-right" onClick={DeleteHandle}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
            <p className="card-text text-left p-2">{Text}</p>
        </div>
    )
}

export default BlogPlate
