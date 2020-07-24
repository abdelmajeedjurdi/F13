import React from "react";
import ReservationForm from "../../components/ReservationForm/ReservationForm"
class ReservationFormm extends React.Component{
constructor(props){
    super(props);
    this.state={
        reservationForm:[{
            tablenumber:'',
            reservationtime:'',
            reservationdate:'',
            name:'',
            email:'',
            pass:'',
            Phone:'',
        }]
      
    }
}

    
    render(){
        return(
            
        <>
         <div>
        <ReservationForm list={this.state.history}/>
        </div>
        </>

        )
    }
}
export default ReservationFormm;