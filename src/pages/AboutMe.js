import React, {useState} from 'react'
import PortfolioSkills from '../components/PortfolioSkills'
import AboutMeText from '../components/AboutMeText'
import CarouselSlide from '../Carousel/CarouselSlide'
import { Paper, Button } from '@material-ui/core'
import { SLIDE_INFO } from '../Carousel/carouselImages'
import { ChevronLeft, ChevronRight } from '@material-ui/icons';



function AboutMe() {
    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        setIndex(newIndex);
    };

    function Arrow(props) {
        const { direction, clickFunction } = props;
        const icon = direction === 'left' ? <ChevronLeft style={{height:50, width:50}}/> : <ChevronRight style={{height:50, width:50}} />;
    
        return <div onClick={clickFunction}>{icon}</div>;
    }

    return (
        
        <div style={{display: 'flex',flexDirection:'column',alignContent:'center',alignItems:'center',
            width:'100%', height:1000, backgroundColor: '#FFE6D0'
            }}>

            <div style={{height: 450, marginBottom:25,width:'80%',overflow:'auto'}}>
                    <AboutMeText />
            </div>

            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Arrow 
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
                <CarouselSlide content={content} />
                <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
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

export default AboutMe
