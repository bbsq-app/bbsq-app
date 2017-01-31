import React from 'react';
import '../../App.css';

import assignTrainingStep2Data from '../../sampleData/Training/assignTrainingStep2.json';
var ASSIGNTRAINING2= assignTrainingStep2Data;
import Header from '../Header';
var Breadcrumb = require('../Business/Breadcrumb.js');
var AssignTrainingTableStep2 = require('../Training/AssignTrainingTableStep2.jsx');

var AssignTrainingStep2 =  React.createClass({
  render() {
  	//console.log(this.props.location.query.empList);
    var empList=this.props.location.query.empList;
   // console.log(empList);
    
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> ASSIGN TRAINING </h1>
          
       </div>
       <div className="container">
          <AssignTrainingTableStep2 
            assignTrainingStep2={ASSIGNTRAINING2}
            empList={empList}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = AssignTrainingStep2;

