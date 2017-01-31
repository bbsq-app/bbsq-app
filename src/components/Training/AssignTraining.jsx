import React from 'react';
import '../../App.css';

import assignTrainingData from '../../sampleData/Training/assignTraining.json';
var ASSIGNTRAINING= assignTrainingData;
import Header from '../Header';
var Breadcrumb = require('../Business/Breadcrumb.js');
var AssignTrainingTable = require('../Training/AssignTrainingTable.jsx');

var AssignTraining =  React.createClass({
  render() {
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> ASSIGN TRAINING </h1>
          
       </div>
       <div className="container">
          <AssignTrainingTable 
            assignTraining={ASSIGNTRAINING}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = AssignTraining;

