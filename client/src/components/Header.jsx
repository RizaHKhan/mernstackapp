import React, {Component } from 'react';
import Registration from './Registration';


class Header extends Component {
    
    render() { 
        return ( <div className="title">Blog App by 
        <h1>---Otonye Iyalla---</h1> 
        and <h1>---Riza Khan---</h1>
        <br/>
        
        <Registration />
        </div> );
    }
}
 
export default Header;