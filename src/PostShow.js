import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            post:[]
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const user = response.data
                this.setState({user})
            })
     
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                const post= response.data
                this.setState({post})
            })
            .catch((err)=>{
                console.log(err)
            })
    }

   render(){
       return(
           <div>
   <h2>show posts of user- {this.state.user.name}</h2>
               <ul>
                   {this.state.post.map(ele=>{
                       return <li key={ele.id}><Link to={`/comments/${ele.id}`}>{ele.title}</Link></li>
                   })}
               </ul>
           </div>
       )
   }
}

export default PostShow