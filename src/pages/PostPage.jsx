import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostPage () {

    const navigate = useNavigate();
    const [post , setPost] = useState(null)
    const { slug } = useParams();
    const url = `http://localhost:3001/posts/${slug}`
    console.log(url);
    

    useEffect(
        () => {
          fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data);
    
              const keys = Object.keys(data)
              console.log(keys);
              if (keys.includes('error')) {
               
                navigate('/404')
    
              } else {
              
                setPost(data.data)
    
              }
    
    
             
    
            })
            .catch(err => {
              console.log(err);
            })
        },
        [])


return (
    
    <>
        {
        post ? (
          <div>

            
          

            <section className="post_details">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card ">
                      
                      <img 
                        className="card" 
                        src={`http://localhost:3001/${post.image}`} 
                        alt={post.title} 
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h3>{post.title}</h3>
                    <div>
                      <p>{post.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        ) : (
          <div>Loading...</div> 
        )
      }
    </>
)
}