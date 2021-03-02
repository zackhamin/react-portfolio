import React from 'react';
import { Card, makeStyles } from '@material-ui/core';


export default function CarouselSlide(props) {
    const  { backgroundImage, title } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 5,
            // padding: '75px 50px',
            height:500,
            width:500,
            // margin: '25px 25px',
            width: '300px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        } 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <img src={backgroundImage}></img>
            <h1>{title}</h1>
        </Card>
    );
}