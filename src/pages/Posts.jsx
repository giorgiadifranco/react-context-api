import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Posts(){



    const [postsData, setPostsData] = useState({})
    const navigate = useNavigate(); {/* mi permette di indirizzare le pagine */}

 

  function fetchData (url = 'http://localhost:3001/posts'){

    fetch(url)
    .then(resp =>resp.json())
    .then(data =>{
      console.log(data);
      setPostsData(data)
      
    })
  }

  useEffect(fetchData, [])




   function handleClick(){

    navigate ('/newpost');

  }

    return(

        <>
          
            <h1>Posts</h1>
            <button onClick={handleClick}>Aggiungi un nuovo Post</button>
             <section className='recipes'>
                <div className="container">
                <div
                    class="row justify-content-center align-items-center g-3"
                >
                    {postsData.data ?
                    postsData.data.map(post =>(
                    <div class="col" key={post.slug}>
                        <div className="card">
                          <Link to={`/${post.slug}`}>
                            <img src={`http://localhost:3001/images/${post.image}`} alt =''/>
                            <h1>{post.title}</h1>
                            <p>
                                {post.content}
                            </p>
                          </Link>
                        </div>
                    </div>
                    )): <p>No results yet</p>} 
                    
                    
                </div>
                
                </div>

             </section>
      </>
    )


}