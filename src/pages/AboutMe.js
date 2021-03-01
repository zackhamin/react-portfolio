import React from 'react'
import PortfolioSkills from '../components/PortfolioSkills'
import AboutMeText from '../components/AboutMeText'
import CarouselSlide from '../Carousel/CarouselSlide'
import { Paper, Button } from '@material-ui/core'

function aboutMe() {
    return (
        
        <div style={{display: 'flex',flexDirection:'column',alignContent:'center',alignItems:'center',
            width:'100%', height:1000, marginLeft:50, backgroundColor: '#FFE6D0'
            }}>

            <div style={{display: 'flex',height: 450, marginBottom:25,width:'80%',overflow:'auto'}}>
                    <AboutMeText />
            </div>

            <div>
                <CarouselSlide style={{width:'80%'}}
                content={{ backgroundColor: '#ff7c7c', title: 'Slide 1' }}
               
            />
            </div>
            {/* <div style={{display: 'flex', width:'90%', height:260,marginTop:25}}>
                 <Paper elevation={3} style={{width:'80%', height:260, padding:20 }}> 
                     <PortfolioSkills />
                 </Paper>
              </div>  */}
        </div>
    )
}

export default aboutMe
