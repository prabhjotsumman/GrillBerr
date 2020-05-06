import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import { Divider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

// import Backgroundimg from "../../assets/grill.jpg";

// import { Link as RLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "90vh",
    marginTop: '20px',
    marginBottom: '20px'
    // alignContent: 'center'
  },
  //   image: {
  //     backgroundImage: `url(${Backgroundimg})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundColor:
  //       theme.palette.type === "light"
  //         ? theme.palette.grey[50]
  //         : theme.palette.grey[900],
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //   },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CheckoutForm(props) {
  const classes = useStyles();

  const initialFormData = {};

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("checkout JSON", formData);
    // console.log(props);
    // props.handleLogin(formData);
  };

  return (
    <Grid container component="main" justify="center" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid item  component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Checkout
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => handleSubmit(e)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            /> */}
            <TextField
              autoComplete="address"
              name="address"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              autoFocus
              onChange={handleChange}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="country"
                  name="country"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="state"
                  name="state"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Shipping address is the same as my billing address."
                />
              </Grid>
            </Grid>
            <FormControl component="fieldset">
              <FormLabel component="legend">Payment Method</FormLabel>
              <RadioGroup
                aria-label="payment Method"
                name="Payment Method"
                // value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="debitCard"
                  control={<Radio />}
                  label="Debit Card"
                />
                <FormControlLabel
                  value="creditCard"
                  control={<Radio />}
                  label="Credit Card"
                />
              </RadioGroup>
            </FormControl>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="nameoncard"
                  name="NameOnCard"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="NameOnCard"
                  label="Name on card"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="creditcardnumber"
                  name="CreditCardNumber"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="creditCardNumber"
                  label="Credit Card Number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="expiration"
                  name="expiration"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="expiration"
                  label="Expiration"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="CVV"
                  name="CVV"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="CVV"
                  label="CVV"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Continue to Checkout
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
