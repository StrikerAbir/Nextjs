import { useState } from "react";

function CommentPage() {
    const [comments,setComments] =useState([])
    const [comment, setComment] = useState('')
    
    const fetchComs = async() => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        console.log(data);
        setComments(data)
    }

    // console.log(comment);
    const submitCom = async () => {
        const response = await fetch("/api/comments", {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({comment})
        });
        const data = await response.json();
        console.log(data);
        
    }
    return (
        <>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={submitCom}>Submit</button>
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