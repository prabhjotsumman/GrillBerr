import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import PDP from "../Product/PDP";
import { isItemInCart } from "../../store/actions/cartActions";
import {connect} from 'react-redux' 

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 270,
    minWidth: 240,
  },
  media: {
    height: 140,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  button: {
    color: "#ffb100",
  },
  buttonContainer: {
    justifyContent: "center",
    backgroundColor: "#000",
  },
  cardContent: {
    border: "1px solid #c1c1c18c",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function GrillCard(props) {
  const classes = useStyles();
  const { grill } = props;
  const [currentGrill] = useState({ grill });
  const [open, setOpen] = React.useState(false);

  // console.log("<GRillcard/>: ",props);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://divinegrill.com/wp-content/uploads/2017/05/Blackstone-3-in-1-Kabob-Charcoal-Grill-Review.jpg"
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {grill.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {grill.description}
            </Typography>
            <Typography
              variant="h3"
              color="initial"
              component="p"
              className="right"
            >
              ${grill.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buttonContainer}>
          <Button
            size="small"
            className={classes.button}
            onClick={() => handleOpen()}
          >
            View
          </Button>
        </CardActions>
      </Card>
      <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paper}>
          <PDP {...currentGrill} prev_status= {props.status} />
        </div>
      </Modal>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    status:
      (state.cart && state.cart.cart && state.cart.cart.status) || "INTIAL",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isItemInCart: (data) => dispatch(isItemInCart(data)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(GrillCard);
// export default GrillCard;
