import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: '5px'
  }, 
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers(props) {
  const classes = useStyles();

  //"2020-05-09"
  const dateNow = new Date().toISOString().substr(0,10);
  // "6:30:32 PM"
  const timeNow = new Date().toLocaleTimeString();
  
  const initialFormData = Object.freeze({
     fromDate: dateNow,
     toDate: timeNow,
   });

   const [formData, updateFormData] = React.useState(initialFormData);

   const handleChange = (e) => {
     updateFormData({
       ...formData,
       [e.target.name]: e.target.value.trim(),
     });
     console.log(formData);
     props.handleDates(formData);
   };

  return (
    <form className={classes.container} id="toFromDateForm">
      <TextField
        id="fromDateField"
        label="From Date"
        name="fromDate"
        type="datetime-local"
        // defaultValue={`${dateNow} + "T10:30"`}
        className={classes.textField}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="toDateField"
        label="To Date"
        name="toDate"
        type="datetime-local"
        // defaultValue="2020-05-12T11:00"
        onChange={handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
