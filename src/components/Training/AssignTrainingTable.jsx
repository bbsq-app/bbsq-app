import React from 'react';
import {Link} from 'react-router';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
import {Button,FormGroup,FormControl}  from 'react-bootstrap';
require('bootstrap');


var empList=[];
var AssignTrainingTable = React.createClass({

clearData: function(){
  empList=[]
},  

courseFormatter: function(cell, row){
  //console.log(row.coursename);
  return '<a href="#/'+cell+'">'+cell+'</a>';
 // return '<Link to="/'+cell+'">'+cell+'</Link>';
},


onRowSelect: function(row, isSelected){
 // console.log(row);
 // console.log("selected: " + isSelected)
  if(isSelected){
    empList.push(row.employee);
  }
  else if(!isSelected){
    var index=empList.indexOf(row.employee);
    empList.splice(index,1);
  }
  //console.log(empList);
},

onSelectAll: function(isSelected){
  console.log("is select all: " + isSelected);
  if(isSelected){
      this.props.assignTraining.forEach(function(emp){
            empList.push(emp.employee);
      }); 
  }
  else if(!isSelected){
    empList=[];
  }
 // console.log(empList);
},


 render: function() {
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: this.onRowSelect,
      onSelectAll: this.onSelectAll
    };
     
  // console.log("ATT empList: " + empList); 
   empList=[];
    return (
      <div>   
     
      Step One: Select Employees 
     <Link to='/AssignTrainingStep2/' query={{empList:empList}}><Button bsStyle="primary" className="myTeam">Next</Button></Link>
      <Link to="/MyTeam"><Button onClick={this.clearData} className="greyColor">Back</Button></Link><br/><br/>

      <FormGroup controlId="formControlsSelect" className="trainingDropdown">
            
            <FormControl componentClass="select" placeholder="select" className="reportEmp">
              <option value="select1">Full Team</option>
              <option value="select2">Direct Reports Only</option>
              <option value="other">...</option>                          
            </FormControl>
      </FormGroup><br/><br/>

    	<BootstrapTable data={this.props.assignTraining} striped={true} hover={true} selectRow={selectRowProp}>
              <TableHeaderColumn isKey={true} dataSort={true} dataField="employee">EMPLOYEE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="jobtitle">JOB TITLE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="team">TEAM</TableHeaderColumn>
       </BootstrapTable><br/>

      <Link to='/AssignTrainingStep2/' query={{empList:empList}}><Button bsStyle="primary" className="myTeam">Next</Button></Link>
      <Link to="/MyTeam"><Button onClick={this.clearData} className="greyColor">Back</Button></Link><br/><br/>
      </div>
     
     
    );
  }
});
module.exports = AssignTrainingTable;