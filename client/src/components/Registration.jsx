import React, { Component } from 'react'
import axios from 'axios'

class Registration extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    change = e => {
        this.setState({[e.target.name]: e.target.value})
    }

   

onSubmit = (e) => {

e.preventDefault();

    fetch('http://localhost:3003/registration', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state)
    })
        .then (function (response){
        return response.json();
        })
            .then(function(data){
            console.log("the state", data)
            });
}

    render() {
        return(
                <form action="/registeration" action="POST">
                    <label htmlFor="username">Username:</label><input type="text" value={this.state.username} onChange={e => this.change(e)} name="username"/>
                    <br />
                    <label htmlFor="email">Email:</label><input type="text" value={this.state.email} onChange={e => this.change(e)} name="email"/>
                    <br />
                    <label htmlFor="password">Password:</label><input type="text" value={this.state.password} onChange={e => this.change(e)} name="password"/>
                    <br />
                    <button onClick={(e) => this.onSubmit(e)}>Register</button>
                </form>
        )
    }
}

export default Registration
