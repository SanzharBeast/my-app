import React, { useState } from 'react'
import Post from './Post'

export default function Posts(props) {
    let postData = props.posts
    const [posts_data, setPosts] = useState(postData)
    const [text, setText] = useState('')
    const [postTitle, setTitle] = useState('')
    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            text,
            postTitle
        }
        setPosts([...posts_data, newPost]);
        setTitle('');
        setText('');
    }
    let posts = posts_data.map(p => {
        return <Post id={p.id}  postTitle={p.postTitle} text={p.text} deletePost={deletePost}/>
    })
    function deletePost(post_id){
        setPosts(posts_data.filter(p => p.id != post_id))
    }
    return (
        <div>
            <form>
                <div className='form-post'>
                    <div className='form-input1'>
                        <input value={postTitle}
                            onChange={e => setTitle(e.target.value)}
                            type="text"
                            placeholder='название поста' />
                            <button type='button' onClick={addNewPost} className='form-btn'>Отправить</button>
                    </div>
                    <div className='form-input2'>
                        <textarea value={text}
                            onChange={e => setText(e.target.value)}
                            type="text"
                            placeholder='Описаниe поста' rows="4" cols="30" />
                    </div>
                </div>
            </form>
            {posts}
        </div>
    )

}
