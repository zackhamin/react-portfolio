
import React, { Component } from 'react'
import { init } from 'ityped'

export default class portfolioFooter extends Component {
  componentDidMount(){
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: 
        ['Software Engineer', 'Tech Enthusiast', 'Mentor',
        ] })
  }
  render(){
      
    return <div id="myElement" style={{fontSize:50, fontFamily: 'Sriracha, cursive', marginLeft:450}}></div>
  }
}
