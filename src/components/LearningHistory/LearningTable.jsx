import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
import {Button}  from 'react-bootstrap';
require('bootstrap');

var pdfConverter = require('jspdf');
require('jspdf-autotable');

var columns = [
               {title: "COURSE TITLE", dataKey: "coursename"},
               {title: "STATUS", dataKey: "status"}, 
               {title: "GRADE", dataKey: "grade"},
               {title: "COMPLETED", dataKey: "completed"} 

              ];
var rows;

var AssignedTable = React.createClass({
 onPrint: function() {
    var doc = new pdfConverter('p','pt');
    doc.autoTable(columns, rows, {});
    doc.save('learninghistory.pdf');
 
},
courseFormatter: function(cell, row){
  //console.log(row.coursename);
  return '<a href="#/'+cell+'">'+cell+'</a>';
 // return '<Link to="/'+cell+'">'+cell+'</Link>';
},
 render: function() {
     rows= this.props.learningHistory;
    return (
      <div>   
     
      <Button bsStyle="primary" onClick={this.onPrint} className="exportPDF"><i className="glyphicon glyphicon-export">Export to PDF</i></Button>
     	<BootstrapTable data={this.props.learningHistory} striped={true} hover={true} search={true} exportCSV={true}  pagination={true}>
              <TableHeaderColumn isKey={true} dataSort={true} dataField="coursename" dataFormat={this.courseFormatter}>COURSE NAME</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="status">STATUS</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="grade">GRADE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="completed">COMPLETED</TableHeaderColumn>
       </BootstrapTable>
      </div>
     
     
    );
  }
});
module.exports = AssignedTable;