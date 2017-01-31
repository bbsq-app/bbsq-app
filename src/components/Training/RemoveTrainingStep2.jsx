import React from 'react';
import '../../App.css';

import assignTrainingStep2Data from '../../sampleData/Training/assignTrainingStep2.json';
var ASSIGNTRAINING2= assignTrainingStep2Data;
import Header from '../Header';
var Breadcrumb = require('../Business/Breadcrumb.js');
var RemoveTrainingTableStep2 = require('../Training/RemoveTrainingTableStep2.jsx');


var RemoveTrainingStep2 =  React.createClass({
  render() {
  	 var empList=this.props.location.query.empList;
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> REMOVE TRAINING </h1>
          
       </div>
       <div className="container">
          <RemoveTrainingTableStep2 
            assignTrainingStep2={ASSIGNTRAINING2}
            empList={empList}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = RemoveTrainingStep2;

