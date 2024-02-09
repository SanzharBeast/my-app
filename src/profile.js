import React from 'react'

export default function Profile(props) {
    return (
        <div>
            <div className='Personality'>
                <img src="https://cdn.onlinewebfonts.com/svg/download_570334.png" alt="" height='100' width='100' />
                <div>
                    <div className='person'>
                        <h3>{props.name}</h3>
                        <p>{props.login}</p>
                        <p>{props.description}</p>
                        <div className='profile'>
                            <p>Followers Rating Articles</p>
                            <div className='num'>
                                <p>{props.followers}</p>
                                <p>{props.rating}</p>
                                <p>{props.articles}</p>
                            </div>
                        </div>
                        <button className='btn1'>Chat</button>
                        <button className='btn2'>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
