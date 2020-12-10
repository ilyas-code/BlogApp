import React from 'react'

function BlogPlate(props) {
    const dateString = new Date(props.time);
    return (
        <div className="card mt-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
            <div className="bg-light border-bottom flex-row">
                <p className="float-left m-1">{dateString.toDateString()}</p>

                <button type="submit" className="btn btn-danger pl-3 pr-3 p-1 float-right" >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
            <p className="card-text text-left p-2">{props.txt}</p>
        </div>
    )
}

export default BlogPlate
