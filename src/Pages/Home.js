import React,{ useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard'

const Home = () => {

    const[data,setData]=useState([])
    useEffect(()=>{
        const url = "https://backend-database-cool.herokuapp.com/api/home";
        fetch(url).then(res => res.json())
            .then(res => setData(res)  )
    },[])
  return (

    <div>
    <div  className='Home'>
      
        <div className="home__container">
      <div className="home__first">
        <h1>welcome to Himalay</h1>
        {/* <img src="https://images.unsplash.com/photo-1533211233557-6afefb3dfcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="cool-img" /> */}
      </div>
      <div className="home__sec">
       <Link to="/fitness" > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcGhq_AAHvnjd0zwfZVqh20-e6jFqyg4fKWA&usqp=CAU" alt="no img" /></Link>
       
      </div>
      </div>
      <div className="home__thir">
       <Link to='/technology'>   <img src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="no img" /></Link>
          </div>
          
                
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px",  thickness:"20px",}} />
                

                <div className='rightbar2'>
                    {
                        data.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        data.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
                
                    </div>
                    </div>
                )
}

export default Home