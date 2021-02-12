import React from 'react'
import PortfolioHomebody from '../components/portfolioBody'

function Home() {
    return (    
            <div
          style={{
            display: "flex",
            height: 300,
            width: "100%",
            marginTop: 30,
            marginBottom: 50,
            marginLeft: 80,
            paddingRight: 60,
            justifyContent: "center",
          }}
        >

            <PortfolioHomebody />
        </div>
    )
}

export default Home
