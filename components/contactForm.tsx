import React, { useState } from "react";
import { FormControl, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

interface contactFormProps {}

type contactProps = {
  Name: string;
  Phone: string;
  Email: string;
  Message: string;
};

export const ContactForm: React.FC<contactFormProps> = ({}) => {
  const classes = useStyles();
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const submitForm = (data: contactProps) => {
    // alert(data.Email);
  };

  return (
    <div className="pt-10 items-center">
      <div></div>
      <FormControl
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm({ Name, Phone, Email, Message });
        }}
        data-aos="fade-up"
      >
        <TextField
          className="w-80"
          id="name"
          label="Name"
          type="text"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="phone"
          label="Phone No"
          type="number"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="email"
          label="Email ID"
          type="text"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            submitForm({ Name, Phone, Email, Message });
          }}
        >
          Contact Us
        </Button>
      </FormControl>
    </div>
  );
};

export default ContactForm;
