import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {setCurrentGrill} from "../../store/actions/grillActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
});

function GrillCard(props) {
  const classes = useStyles();
  const { grill } = props;
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://divinegrill.com/wp-content/uploads/2017/05/Blackstone-3-in-1-Kabob-Charcoal-Grill-Review.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {grill.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {grill.description}
          </Typography>
          <Typography
            variant="h3"
            color="textSecondary"
            component="p"
            className="right"
          >
            {grill.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          to={{ pathname: "/bbq", pdpProps: grill }}
          className={classes.link}
        >
          <Button
            size="small"
            color="primary"
            onClick={() => props.setCurrentGrill(grill)}
          >
            Rent it
          </Button>
        </Link>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentGrill: (grill) => dispatch(setCurrentGrill(grill)),
  };
};

export default connect(null, mapDispatchToProps)(GrillCard);
