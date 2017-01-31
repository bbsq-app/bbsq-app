import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
import {Button,FormGroup,FormControl}  from 'react-bootstrap';
require('bootstrap');

var pdfConverter = require('jspdf');
require('jspdf-autotable');

var columns = [
               {title: "ASSIGNED TO", dataKey: "assignedto"},
               {title: "COURSE TITLE", dataKey: "coursename"}, 
               {title: "DUE DATE", dataKey: "duedate"} 

              ];
var rows;

var ReportsTable = React.createClass({
 onPrint: function() {
    var doc = new pdfConverter('p','pt');
    doc.autoTable(columns, rows, {});
    doc.save('Reports.pdf');
 
},
courseFormatter: function(cell, row){
  //console.log(row.coursename);
  return '<a href="#/'+cell+'">'+cell+'</a>';
 // return '<Link to="/'+cell+'">'+cell+'</Link>';
},
 render: function() {
     rows= this.props.myTeam;
    return (
      <div>   
      <FormGroup controlId="formControlsSelect" >
            
            <FormControl componentClass="select" placeholder="select" className="report">
              <option value="select1">Assigned Training</option>
              <option value="select2">Training History</option>
              <option value="select3">Overdue Training</option>
              <option value="select4">In-person Registration</option> 
            </FormControl>&nbsp;
            
            <FormControl componentClass="select" placeholder="select" className="report">
              <option value="select1">Full Team</option>
              <option value="select2">Direct Reports Only</option>
              <option value="other">...</option>                          
            </FormControl>
      </FormGroup>
    
      
      <Button bsStyle="primary" onClick={this.onPrint} className="exportReport"><i className="glyphicon glyphicon-export">Export to PDF</i></Button>

      
             
    	<BootstrapTable data={this.props.myTeam} striped={true} hover={true} exportCSV={true} search={true}>
              <TableHeaderColumn isKey={true} dataSort={true} dataField="assignedto">ASSIGNED TO</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="coursename" dataFormat={this.courseFormatter}>COURSE TITLE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="duedate">DUE DATE</TableHeaderColumn>
       </BootstrapTable>
      </div>
     
     
    );
  }
});
module.exports = ReportsTable;