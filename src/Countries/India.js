import React, { useEffect, useState } from 'react';
import axios from "axios";
import { IND_API } from '../API/Env';
function India() {
    const [posts,setPosts] = useState([])

    const getApiData =  ()=>{ 
          axios.get(IND_API)
          .then((data)=>{
              setPosts(data.data.articles)
              console.log(data.data.articles);
          }) 
    }
    useEffect(()=>{
        getApiData();
    },[])
    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                        <h3>India News today</h3>
                        {
                            posts.map((res)=>{
                                return(
                                    <div  className='col-md-3 py-3'>
                                         <h5>{res.title}</h5>
                                         <p>Author: {res.author}</p>
                                         <img className='img-fluid' src={res.urlToImage} />
                                         <h6><i>Author{res.author}</i></h6>
                                         <a href={res.url} className='myfont btn btn-danger py-2' target='_blank'>READ MORE</a>

                                    </div>
                                )
                            })
                        }
               
                </div>
            </div>
        </div>
    );
}

export default India;