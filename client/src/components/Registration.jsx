import React, { Component } from 'react'

class Registration extends Component {

    render() {
        return(
            <div>
                <form action="/registeration" action="POST">
                <label htmlFor="">Username:</label><input type="text" name="username"/>
                <label htmlFor="#">Email:</label><input type="text" name="email"/>
                <label htmlFor="#">Password:</label><input type="password" name="password"/>
                <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Registration
