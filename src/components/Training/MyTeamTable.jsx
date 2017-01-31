import React from 'react';
import {Link} from 'react-router';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
import {Button,DropdownButton,MenuItem}  from 'react-bootstrap';
require('bootstrap');

var pdfConverter = require('jspdf');
require('jspdf-autotable');

var columns = [
               {title: "ASSIGNED TO", dataKey: "assignedto"},
               {title: "COURSE TITLE", dataKey: "coursename"}, 
               {title: "DUE DATE", dataKey: "duedate"} 

              ];
var rows;

var MyTeamtable = React.createClass({
 onPrint: function() {
    var doc = new pdfConverter('p','pt');
    doc.autoTable(columns, rows, {});
    doc.save('myTeam.pdf');
 
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
     <DropdownButton title="DIRECT REPORTS" id={`dropdown-basic-Default`}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>Active Item</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
      <Link to="/RemoveTraining"><Button bsStyle="primary" className="myTeam">Remove Training</Button></Link>
      <Link to="/AssignTraining"><Button bsStyle="primary" className="myTeam">Assign Training</Button></Link><br/><br/>
             
    	<BootstrapTable data={this.props.myTeam} striped={true} hover={true}>
              <TableHeaderColumn isKey={true} dataSort={true} dataField="assignedto">ASSIGNED TO</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="coursename" dataFormat={this.courseFormatter}>COURSE TITLE</TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataField="duedate">DUE DATE</TableHeaderColumn>
       </BootstrapTable>
      </div>
     
     
    );
  }
});
module.exports = MyTeamtable;