import React from 'react';
import '../../App.css';

import assignTrainingData from '../../sampleData/Training/assignTraining.json';
var ASSIGNTRAINING= assignTrainingData;
import Header from '../Header';
var Breadcrumb = require('../Business/Breadcrumb.js');
var RemoveTrainingTable = require('../Training/RemoveTrainingTable.jsx');

var RemoveTraining =  React.createClass({
  render() {
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> REMOVE TRAINING </h1>
          
       </div>
       <div className="container">
          <RemoveTrainingTable 
            assignTraining={ASSIGNTRAINING}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = RemoveTraining;

