import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state ={
            'NavItemActive': ''
        }
    }
    activeItem =(x)=>{
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState(
            {'NavItemActive' : x},
            ()=>{document.getElementById(this.state.NavItemActive).classList.add('active')}

        )
    };
    render (){
        return (
          <nav>
              <ul>
                  <Navitem item="Home" tolink='/' activity={this.activeItem}></Navitem>
                  <Navitem item="About Me" tolink='/about' activity={this.activeItem}></Navitem>
                  <Navitem item="Education" tolink='/education' activity={this.activeItem}></Navitem>
                  <Navitem item="Voluntery" tolink='/voluntery' activity={this.activeItem}></Navitem>

              </ul>
          </nav>
        )
    }
}

export default Navbar;