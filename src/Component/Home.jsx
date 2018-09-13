import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Home.css';
import vid from '../photos/Home.webm'

class VideoBunner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div class="Bunner">
                    <video id="background-video" loop autoPlay>
                        <source src={vid} type="video/mp4"/>
                        <source src={vid} type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                    <p className='bunnerPra'>GeekyMouse 
                    <br/>We make Games that plays you ... !
                     <br/>
                    <span className="glyphicon glyphicon-menu-down"></span>
                    </p>
                </div>
            </div>
        );
    }
}

// export default Bunner;

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <VideoBunner/> {/*Types of music section*/}
            </div>
        );
    }
}

export default Home;