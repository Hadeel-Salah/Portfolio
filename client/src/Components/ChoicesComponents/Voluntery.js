import React, { Component } from 'react';
class Voluntery extends Component{
    constructor(props){
        super(props);
        this.state ={
            places : ['Example1', 'Example2','Example3','Example4']
        }
    }
    render() {
        return(
            <div className="condiv">
                <h1 className="">Voluntery work</h1>
                <ul>
                   {this.state.places.map((place)=>{
                        return <li>{place}</li>
                   }
                   
                   )} 
                </ul>
             </div>
    )

}
}
export default Voluntery