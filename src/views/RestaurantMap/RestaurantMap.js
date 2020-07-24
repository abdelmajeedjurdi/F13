import React from "react";
import RestaurantMap from "../../components/RestaurantMap/RestaurantMap";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
class RestaurantMapp extends React.Component{
constructor(props){
    super(props);
    this.state={
      
    }
}
    
    render(){
        return(
        <>
         <div>
        <RestaurantMap />
        </div>
        </>

        )
    }
}
export default RestaurantMapp;