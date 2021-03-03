
import axios from 'axios';
import Paper  from '@material-ui/core/Paper';
import React,{Component, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextFields from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';
import { emailjs, init, } from 'emailjs-com';


const ContactPage = () => {

  const serviceID = 'service_ldzqgxa';
  const templateID = 'template_0uxrcpt';
  const userID = 'user_k0UJhEZsy374k2ZLM6pFa'

  const [sender, setSender] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [message, setMessage] = useState(" ")
  const [showSuccessBanner, setShowSuccessBanner] = useState(false)
      
  const templateParams = {
    from_name: sender,
    from_email: email,
    message: message
  };

      const sendEmail =(e) => {
          e.preventDefault()
        window.emailjs.send(serviceID, templateID,templateParams,userID)
        .then(() => {
            console.log('Email successfully sent!')
        }, (err) => {
          alert(JSON.stringify(err));
        })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
      }  

      return (
        <Grid style={{ backgroundColor: '#FFE6D0', height:800, width:'100%'}} container direction='column' alignItems='center'  >
            <Grid item ><Paper elevation={3} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',width:400,height:350, padding: 15}}>
            <form onSubmit={sendEmail}>
            <Grid container spacing={2} direction='column'>
                <Grid item > <TextFields label="Name" variant="outlined" size="small" type="text" onChange={e => setSender(e.target.value)} /> </Grid>
                <Grid item > <TextFields label="Email" variant="outlined" size="small" type="email" onChange={e => setEmail(e.target.value)}  /></Grid>
                <Grid item > <TextFields multiline="true" label="Message" variant="outlined" size="small" type="text" onChange={e => setMessage(e.target.value)}  /></Grid>
                <Grid item > <Button type='submit'
                variant="contained"
                color="primary"
                disabled={
                  sender === ' ' || email === ' ' || message === ' '
                } >
                  Submit
                </Button>
                </Grid>
                { showSuccessBanner && (
                   <Typography variant="h6">
                   Message sent
                 </Typography>
                ) }
             </Grid>
            </form>
          </Paper></Grid>
        </Grid>
      );
  }
 
  export default ContactPage;

