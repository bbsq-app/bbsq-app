import React from 'react';
import {Table}  from 'react-bootstrap';
import {Link} from 'react-router';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaSort from 'react-icons/lib/fa/sort';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 

var AssignedRow = React.createClass({
  render: function() {
           
    return (
      <tr>
        <td><Link to={"/"+this.props.data.coursename}>{this.props.data.coursename}<FaArrowCircleRight/></Link></td>
        <td>{this.props.data.assignedby}</td>
        <td>{this.props.data.coursetype}</td>
        <td>{this.props.data.duedate}</td>
      </tr>
    );
  }
});


var AssignedTable = React.createClass({

updateContent: function() {
  return { content: 'PDF content' }
},
 render: function() {
   console.log(this.props);
  var rows = [];
   this.props.assignedLearning.forEach(function(data) {
    if (data.coursename.indexOf(this.props.filterText) === -1) {
        return;
      }
    rows.push(<AssignedRow data={data} key={data.coursename} category={data.coursetype}/>);
  }.bind(this));
    
    return (
      <div>      
    	<Table responsive hover id="example">
          
          <thead className="marginBox">
             <tr>
                  <th>Course Title<FaSort/></th>
                  <th>Assigned By<FaSort/></th>
                  <th>Course Type<FaSort/></th>
                  <th>Due Date<FaSort/></th>
                </tr>
            
          </thead>
          
          <tbody>{rows}</tbody>
         
      </Table>
      {this.updateContent}
     </div> 
     
    );
  }
});
module.exports = AssignedTable;