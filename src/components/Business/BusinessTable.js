import React from 'react';
import {Navbar,FormGroup,FormControl,Table}  from 'react-bootstrap';
import { Link } from 'react-router';
import MdAccessAlarm from 'react-icons/lib/md/access-alarm';
import MdViewColumn from 'react-icons/lib/md/view-column';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';


var BusinessRow = React.createClass({
  render: function() {
          
    return (
      <tr>
        <td><a color='#178CC6'><Link to="/CourseDetail/" query={{coursename:this.props.business.coursename}}>{this.props.business.coursename}<FaArrowCircleRight color='#178CC6'/></Link></a></td>
        <td><MdAccessAlarm color='#178CC6'/> {this.props.business.totaltime}</td>
        <td><MdViewColumn color='#178CC6'/> {this.props.business.category}</td>
      </tr>
    );
  }
});


var BusinessTable = React.createClass({
 render: function() {
   var coursename=this.props.coursename;
  var rows = [];
  var totalBusinessCourse = this.props.business.length;  
  this.props.business.forEach(function(business) {
   
      rows.push(<BusinessRow business={business} key={business.coursename} category={business.category}/>);
  });
    
    return (
      <div>
    	<Navbar>
          <Navbar.Text>
            <b className="textSize">{totalBusinessCourse}</b> {coursename} Courses Available
          </Navbar.Text>
          <Navbar.Collapse>
          <Navbar.Form>
             <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="select">
                <option value="select">Course Title(A-Z)</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>
           </Navbar.Form> 
          </Navbar.Collapse>
        </Navbar>
      <Table responsive hover>
          <tbody>{rows}</tbody>
      </Table>
      </div>
    );
  }
});
module.exports = BusinessTable;