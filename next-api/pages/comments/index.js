import { useState } from "react";

function CommentPage() {
    const [comments,setComments] =useState([])
    const fetchComs = async() => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        console.log(data);
        setComments(data)
    }
    return (
        <>
            <button onClick={fetchComs}>Load comments</button>
            {
                comments?.map(comment => {
                    return (
                        <div key={comment.id}>
                            {comment.text}
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentPage