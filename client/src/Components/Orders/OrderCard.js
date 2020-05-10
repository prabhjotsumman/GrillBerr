import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    paddingLeft: "10px",
    margin: "auto",
    // flexGrow:1
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    // marginBottom: 12,
  },
});

export default function OrderCard(props) {
  const classes = useStyles();
  const {order} = props;
  // console.log(order)
  // console.log("OC:",props);
  return (
    <Card className={classes.root} square>
      {order &&
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Order Id: {order.id}
        </Typography> */}
        <Typography variant="h6" component="h2">
          {order.name}
        </Typography>
        <br></br>
        <Typography color="textSecondary">Booking Info: {order.id}</Typography>
        <Typography color="textSecondary">From Date:</Typography>
        {/* {order.fromDate} {order.fromTime} */}
        <Typography color="textSecondary">
          ToDate:
          {/* {order.toDate} {order.toTime} */}
        </Typography>
        <Typography color="textSecondary">
          Total amount paid: ${order.price}
        </Typography>
      </CardContent>}
    </Card>
  );
}
