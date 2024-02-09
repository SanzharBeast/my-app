import React from 'react'
import Profile from './profile'

export default function Profiles(props) {
    let user = props.data.users.map(r =>{
        return <Profile login={r.login} name={r.name} articles={r.articles} followers = {r.followers} rating= {r.rating} description={r.description}/>
    })
    return (
        <div>
            {user}
        </div>
    )
}
