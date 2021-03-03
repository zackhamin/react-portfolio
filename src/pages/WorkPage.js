import Paper  from '@material-ui/core/Paper';
import React,{Component, useState} from 'react';
import TextFields from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core';
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'






function WorkPage() {
    return (
     <Grid style={{ backgroundColor: '#FFE6D0', height:'100%', width:'100%'}} container direction='column' alignItems='center'  >
        
        <Grid item ><Paper elevation={3} style={{display:'flex', margin:15,flexDirection:'column', justifyContent:'center', alignItems:'center',width:350,height:230, padding: 15}}>
            <Grid container spacing={2} direction='column'>
            <Grid item style={{fontSize:20, fontFamily:"Sriracha, cursive"}}> This site was built using React and Material UI - Grids, form data, Links, 
             Routes, Paper and more. You can find more of my projects in the GitHub link to the left. <br></br>  </Grid>
         </Grid>
      </Paper></Grid>
        
        
        <Grid item ><Paper elevation={3} style={{display:'flex', margin:15,flexDirection:'column', justifyContent:'center', alignItems:'center',width:350,height:230, padding: 15}}>
            <Grid container spacing={2} direction='column'>
            <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> Javascript </Grid>
            <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> Kotlin </Grid>
            <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={one}></img> Swift </Grid>
            <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={one}></img> Python </Grid>
         </Grid>
      </Paper></Grid>

      <Grid item ><Paper elevation={3} style={{display:'flex', margin:15, flexDirection:'column', justifyContent:'center', alignItems:'center',width:350,height:380, padding: 15}}>
        <Grid container spacing={2} direction='column'>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={three}></img> React </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={one}></img> Node </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> Material UI </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> Bootstrap </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={one}></img> Numpy </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={one}></img> Pandas </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> Docker </Grid>
        </Grid>
        </Paper></Grid>

        <Grid item ><Paper elevation={3} style={{display:'flex', margin:15, flexDirection:'column', justifyContent:'center', alignItems:'center',width:400,height:350, padding: 15}}>
        <Grid container spacing={2} direction='column'>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={three}></img> Git </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> SourceTree</Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> Atlassian </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={three}></img> VSCode </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> Android Studio </Grid>
        <Grid item style={{fontSize:25, fontFamily:"Sriracha, cursive"}} > <img src={two}></img> IntelliJ </Grid>
        </Grid>
        </Paper></Grid>
    </Grid>
    )
}

export default WorkPage
