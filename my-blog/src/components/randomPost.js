import React from 'react';
import axios from 'axios'
import '../App.css';
import { Card } from 'reactstrap';

class RandomPost extends React.Component{
    constructor(){
        super()
        this.state = { 
            posts : []
        }
    }

    componentDidMount(){
        const id = Math.round((Math.random())*10)
        console.log(id)
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => this.setState(() => ({ posts : response.data })))
    }
    render(){
        return(
            <div className="random-color">
                <ul>
                    {
                        this.state.posts.map(post => {
                            return(
                                <div> 
                                <Card body inverse color="muted">
                                    <li key={post.id} className="random-color"><h2>{post.title}</h2></li>
                                    <li className="random-color">{post.body}</li>
                                </Card>
                                    
                                </div>
                            )
                        })
                    }
                </ul>
                
            </div>
        )
    }
} 

export default RandomPost