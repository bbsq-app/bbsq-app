import React from 'react';
import './App.css';

import assignedLearningData from './sampleData/AssignedLearning/assignedLearning.json';
var ASSIGNEDLEARNING= assignedLearningData;
import Header from './components/Header';
var Breadcrumb = require('./components/Business/Breadcrumb.js');
var AssignedTable = require('./components/AssignedLearning/AssignedTable.js');

var AssignedLearning =  React.createClass({
  render() {
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> ASSIGNED LEARNING </h1>
          
       </div>
       <div className="container">
          <AssignedTable 
            assignedLearning={ASSIGNEDLEARNING}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = AssignedLearning;

