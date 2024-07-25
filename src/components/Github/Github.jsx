import React from 'react'
import { useLoaderData ,useParams } from 'react-router-dom'

function Github() {
    let { userId } = useParams();
    const data = useLoaderData()
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async({userId})=>{
    console.log(userId)
    const response = await fetch(`https://api.github.com/users/${userId}`)
    return response.json();
} 
