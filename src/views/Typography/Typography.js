import React,{ useState }from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Link } from "react-router-dom";
import History from "../History/History";
import axios from 'axios';

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function TypographyPage(props) {
  const classes = useStyles();
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [password, setPassword] = useState('');
const test=(e)=>{
  e.preventDefault();
  let temp=props.previousData.calendar+" "+props.previousData.time[0]+"-"+props.previousData.time[props.previousData.time.length-1];
  let formData = new FormData();
    formData.append("name",name);
    formData.append("email", email);
    formData.append("password",password);
    formData.append("phone",phone);
    axios.post('http://localhost:8000/api/user', 
    formData
  , {
    headers:{ "Content-Type": "application/json"}
  })

      .then(function (response) {
        formData.append("request", false);
        formData.append("pending", true);
        formData.append("user_id",response.data.data.id);
        formData.append("table_id",props.previousData.tableid);
        formData.append("date_time",temp);
         axios.post('http://localhost:8000/api/reservation', 
      formData
    , {
      headers:{ "Content-Type": "application/json"}
    }).then(function(res){
       alert("Your reservation has been requested") 
    })
      
          
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
}

  return (
    <Card>
      <CardHeader color="primary">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <form>
                <div className="grey-text">
                <MDBInput
                    label="Table number"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={props.previousData.tableid}
                    disabled={true}
                  />
                   <MDBInput
                    label="Reservation time"
                    icon="clock"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={`${props.previousData.time[0]}-${props.previousData.time[props.previousData.time.length-1]}`}
                    disabled={true}
                  />
                    <MDBInput
                    label="Reservation Date"
                    icon="calendar-alt"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={props.previousData.calendar}
                    disabled={true}
                  />
                  <MDBInput
                    label="Your name (Reservation Under Name)"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                 
                  
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                    <MDBInput
                    label="Phone"
                    icon="mobile-alt"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" type="submit" onClick={(e)=>test(e)}>
                    Send 
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
 
      </CardHeader>
      
    </Card>
  );
}
