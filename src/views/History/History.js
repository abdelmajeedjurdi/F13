import React from "react";
import History from "../../components/History/History"
class Historyq extends React.Component{
constructor(props){
    super(props);
    this.state={
        history:[{
            date:'',
            time:'',
            tablenumber: '',
            email:'',
            status:'',
        }]
  
      
    }
}
    
    render(){
        return(
        <>
         <div>
        <History list={this.state.history} />
        </div>
        </>

        )
    }
}
export default Historyq;