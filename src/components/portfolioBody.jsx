import React, { Component } from 'react';
import signatureAbout from '../images/about.png'

class PortfolioBody extends Component {
    state = {  }


    render() { 


        return ( 
        
        <div>
                <img style={{marginLeft:0}} src={signatureAbout}  height="200px" width="500px"></img>
                <p>Just something to push</p>
        </div> );
    }
}
 
export default PortfolioBody;





// import React, { Component } from 'react'
// import { init } from 'ityped'

// export default class portfolioBody extends Component {
//   componentDidMount(){
//     const myElement = document.querySelector('#myElement')
//     init(myElement, { showCursor: false, strings: 
//         ['Jira', 'Atlassian', 'BitBucket',
//         'GitLab', 'GitLab Pipelines','Sourcetree', 
//         'Docker', 'Trello'] })
//   }
//   render(){
      
//     return <div id="myElement" style={{fontSize:50, }}></div>
//   }
// }
