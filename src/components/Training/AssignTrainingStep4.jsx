import React from 'react';
import {Link} from 'react-router';
import '../../App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
import {Button}  from 'react-bootstrap';
import Header from '../Header';
var Breadcrumb = require('../Business/Breadcrumb.js');
require('bootstrap');

var confirmTraining=[];
var id = 0;

var AssignTrainingStep4 = React.createClass({
getInitialState: function() {
    confirmTraining=[];
    return {   
      };
    
  }, 
clearData: function(){
  confirmTraining=[]
} , 
render(){
	var assigntrainingList=this.props.location.query.assigntrainingList;
  var empList=this.props.location.query.empList;
  var date=this.props.location.query.date;
 
  if (!(assigntrainingList === undefined) && !(empList === undefined)){
        if (Array.isArray(empList) && Array.isArray(assigntrainingList)) {
            
                empList.forEach(function(empList){
                  assigntrainingList.forEach(function(assigntrainingList){
                  confirmTraining.push({id:id++,employee:empList, coursename:assigntrainingList, duedate:date});
                  }); 
                });     
        }

        if (!Array.isArray(empList) && !Array.isArray(assigntrainingList)) {
           confirmTraining.push({id:id++,employee:empList, coursename:assigntrainingList, duedate:date});
        }
        if (!Array.isArray(empList) && Array.isArray(assigntrainingList)){
            assigntrainingList.forEach(function(assigntrainingList){
                  confirmTraining.push({id:id++,employee:empList, coursename:assigntrainingList, duedate:date});
            }); 
        }
        if (Array.isArray(empList) && !Array.isArray(assigntrainingList)){
            empList.forEach(function(empList){
                  confirmTraining.push({id:id++,employee:empList, coursename:assigntrainingList, duedate:date});
            }); 
        }
  }
//confirmTraining=[];
    return (
      <div className="Business">  
      <Header/>
      <div className="container">
      <Breadcrumb/>
      <h1> ASSIGN TRAINING </h1>
      Step Four: Confirm Training to Assign 
      <Link to="/AssignTraining"><Button bsStyle="primary" className="myTeam">Next</Button></Link>
      <Link to="/AssignTrainingStep3" query={{empList:empList, assigntrainingList:assigntrainingList}}><Button onClick={this.clearData} className="greyColor">Back</Button></Link><br/><br/><br/>

      <BootstrapTable data={confirmTraining} striped={true} hover={true}>
              <TableHeaderColumn isKey={true} dataSort={true} dataField="id" hidden={true}>UNIQUE ID</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="employee">EMPLOYEE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="coursename">COURSE TITLE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="duedate">DUE DATE</TableHeaderColumn>
       </BootstrapTable><br/>
      
      <Link to="/AssignTraining"><Button bsStyle="primary" className="myTeam">Next</Button></Link>
      <Link to="/AssignTrainingStep3" query={{empList:empList, assigntrainingList:assigntrainingList}}><Button onClick={this.clearData} className="greyColor">Back</Button></Link><br/><br/><br/>

      
       
      </div>
      </div>
     
     
    );
  }
});
module.exports = AssignTrainingStep4;