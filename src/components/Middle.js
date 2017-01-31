import React, { Component } from 'react';

import {Jumbotron, Button} from 'react-bootstrap';



export default class Middle extends Component {
   render() {
        return (
        
            <Jumbotron>
                <h1>BLACKBERRY LEARNING CENTER</h1>
                <p>What do you want to learn today? Check out the great learning offerings below.</p>
                <p><Button bsStyle="primary">GET STARTED</Button></p>
            </Jumbotron>
        
      );
   }
   
}