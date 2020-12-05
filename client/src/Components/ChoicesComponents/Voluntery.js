import React, { Component } from 'react';
class Voluntery extends Component{
    constructor(props){
        super(props);
        this.state ={
            places : [
                'Desginer at Google Developer Student Clubs - DSC Al-Azhar Gaza',
                'Technical Writer at Better Programming ',
                'Front-End Developer at Mishkah',
                'Technical Writer at Analytics Vidhya'
            ]
        }
    }
    render() {
        return(
            <div className="condiv">
               <div className="allSections">
                    <h1>Voluntery Section:</h1>
                    <ul>
                        {this.state.places.map((place)=>{
                                return <div>
                                            <h6> {place}</h6>
                                        </div>
                        }
                        )} 
                    </ul>
               </div>
             </div>
    )

}
}
export default Voluntery