import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faFacebook,  faInstagram, faGithub, faTwitter, faDiscord, faLinkedin, faYoutube, faTiktok, faDocker, faCloudflare, faSlack, faGoogle, faGitlab, faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
// import { faI } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='icons'>
        <FontAwesomeIcon icon={faDiscord} className='App-logo' style={{color: 'rgb(110,125,242)'}}/>
        <FontAwesomeIcon icon={faFacebook} className='App-logo' style={{color: 'rgb(24,124,239)'}}/>
        <FontAwesomeIcon icon={faInstagram} className='App-logo'/>
        <FontAwesomeIcon icon={faTwitter} className='App-logo' style={{color: 'rgb(32,159,231)'}} />
        <FontAwesomeIcon icon={faGithub} className='App-logo'/>
        <FontAwesomeIcon icon={faLinkedin} className='App-logo' style={{color: 'rgb(5,121,179)'}}/>
        <FontAwesomeIcon icon={faTiktok} className='App-logo'/>
        <FontAwesomeIcon icon={faYoutube} className='App-logo' style={{color: 'rgb(252,1,18)'}}/>
        <FontAwesomeIcon icon={faSlack} className='App-logo'/>
        <FontAwesomeIcon icon={faDocker} className='App-logo' style={{color: 'rgb(38,149,237)'}}/>
        <FontAwesomeIcon icon={faCloudflare} className='App-logo'/>
        <FontAwesomeIcon icon={faGoogle} className='App-logo' style={{color: 'rgb(57,166,89)'}}/>
        <FontAwesomeIcon icon={faGitlab} className='App-logo'/>
        <FontAwesomeIcon icon={faWindows} className='App-logo'/>
    </div>
  )
}

export default Footer