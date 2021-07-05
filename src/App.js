/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react'
import quotes from 'quotesy'
import { TumblrShareButton } from "react-simple-share";
import { TwitterShareButton } from "react-simple-share";
import Radium from 'radium';
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

const styles = {
  App: {
    textAlign: 'center',
    fontSize: '32px'
  },
  btn: {
  outline:'none',
  height: '40px',
  textAlign: 'center',
  width: '130px',
  borderRadius:'40px',
  marginTop: '100px',
  background: '#fff',
  border: '2px solid green',
  color:'green',
  letterSpacing:'1px',
  textShadow:0,
  font:{
    size:'12px',
    weight:'bold'
  },
  cursor: 'pointer',
  transition: 'all 0.25s ease',
},
  quoteStyle: {
  color: 'rgb(161, 142, 35)'
  },
  quotes: {
    borderRadius: '40px 40px 40px 40px',
    marginLeft:'90px',
    marginRight: '90px',
    marginTop: '50px',
    marginBottom: '40px',
},
}


class RandomQuote extends React.Component {
   state = {
      quote: quotes.random()
   }
   
   render(){
   const { author, text } = this.state.quote
     return( 
       <div id="wrapper">
         <div id='#quote-box'>
           <TwitterShareButton
    url="ᅠ"
    color="#1DA1F2"
    size="40px"
    // eslint-disable-next-line no-useless-concat
    text={text + "" + " -" + author}
    hashtags=""
    via=""
    related=""
  />
  <TumblrShareButton
    url="freecodecamp.org"
    color="#35465D"
    size="40px"
    title={author}
    // eslint-disable-next-line no-useless-concat
    caption={text + "" + " -" + author} 
    tags="react, javascript"
  /> </div> 
  <div style={styles.quotes} id="quote-box">
  <div id="text">
       	{text}
       <cite id="author" style={styles.quoteStyle}>-{author}</cite>
       <div>
       <button id="new-quote" className="btn" style={styles.btn} onClick={handleChange}>New Quote</button></div></div>
       </div></div>
     )
   }
}

const handleChange = () => {
  window.location.reload()
}

function App() {
  return (
    <div style={styles.App}>
      <RandomQuote></RandomQuote>
    </div>
  );
}

export default Radium(App);
