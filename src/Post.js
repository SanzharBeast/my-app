import React, { useState } from 'react'
import Posts from './Posts'

export default function Post(props) {
    let title_ref = React.createRef()
    function titleChange() {
        title_ref.current.style.color = "blue"
    }
    let text_ref = React.createRef()
    function changeColor() {
        title_ref.current.style.color = "black"
    }
    const [l_counter, setLCounter] = useState(0)
    const [d_counter, setDCounter] = useState(0)
    function likes() {
        setLCounter(l_counter + 1)
    }
    function dislikes() {
        setDCounter(d_counter + 1)
    }
    return (
        <div>
            <div className='ppost'>
                <div>
                    <h1 ref={title_ref} onDoubleClick={titleChange}>{props.postTitle}</h1>
                </div>
                <div>
                    <p ref={text_ref} onMouseEnter={changeColor}>{props.text}</p>
                </div>
                <h2>Likes:{l_counter}</h2>
                <h2>Dislikes:{d_counter}</h2>
                <div className='butttons'>
                    <div>
                        <button onClick={likes} className='buttn'>Likes post</button>
                    </div>
                    <div>
                        <button onClick={dislikes} className='buttn1'>Dislikes post</button>
                    </div>
                    <div className='delete-img'>
                        <button onClick={() => props.deletePost(props.id)} className='delete-btn'>
                            <img src="Delete.png.png" alt="" width={50}  />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
