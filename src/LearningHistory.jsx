import React from 'react';
import './App.css';

import learningHistoryData from './sampleData/LearningHistory/learningHistory.json';
var LEARNINGHISTORY= learningHistoryData;
import Header from './components/Header';
var Breadcrumb = require('./components/Business/Breadcrumb.js');
var LearningTable = require('./components/LearningHistory/LearningTable.jsx');

var LearningHistory =  React.createClass({
   render() {
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1>LEARNING HISTORY</h1>
          
       </div>
       <div className="container">
          <LearningTable 
            learningHistory={LEARNINGHISTORY}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = LearningHistory;

