import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Iframe from 'react-iframe'
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import abd from "../../assets/img/moviemakeronline.com.200710-95dc5a61-586e-4d83-9d29-3e134872bd22.mp4";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function RestaurantView() {
  const classes = useStyles();
  return (
    <div>
          <GridItem  xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary" >
      <h1>Welcome to our App</h1>
      
<Iframe url={abd}
        autoplay= 'true'
        type='video/mp4'
        frameBorder='0'
       
        allowFullScreen
        title='video'
        width="900px" height="500px" 
      
        />
      
    
    </CardHeader>
    </Card>
      </GridItem>
      </div>
  );
}
