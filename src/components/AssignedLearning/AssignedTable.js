import React from 'react';
//import {Link} from 'react-router';
//import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
import {Button}  from 'react-bootstrap';
require('bootstrap');

var pdfConverter = require('jspdf');
require('jspdf-autotable');

var columns = [
               {title: "COURSE TITLE", dataKey: "coursename"},
               {title: "ASSIGNED BY", dataKey: "assignedby"}, 
               {title: "COURSE TYPE", dataKey: "coursetype"},
               {title: "DUE DATE", dataKey: "duedate"} 

              ];
var rows;

var AssignedTable = React.createClass({
 onPrint: function() {
    var doc = new pdfConverter('p','pt');
    doc.autoTable(columns, rows, {});
    doc.save('assignedlearning.pdf');
 
},
courseFormatter: function(cell, row){
  //console.log(row.coursename);
  return '<a href="#/'+cell+'">'+cell+'</a>';
 // return '<Link to="/'+cell+'">'+cell+'</Link>';
},
 render: function() {
     rows= this.props.assignedLearning;
    return (
      <div>   
     
      <Button bsStyle="primary" onClick={this.onPrint} className="exportPDF"><i className="glyphicon glyphicon-export">Export to PDF</i></Button>
     
             
    	<BootstrapTable data={this.props.assignedLearning} striped={true} hover={true} search={true} exportCSV={true} pagination={true}>
              <TableHeaderColumn isKey={true} dataSort={true} dataField="coursename" dataFormat={this.courseFormatter}>COURSE TITLE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="assignedby">ASSIGNED BY</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="coursetype">COURSE TYPE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="duedate">DUE DATE</TableHeaderColumn>
       </BootstrapTable>
      </div>
     
     
    );
  }
});
module.exports = AssignedTable;