import React from 'react';
import {Table} from 'react-bootstrap';
var Page = require('./Page.js');

var CourseCategoryRow = React.createClass({
  render: function() {
     // console.log(this.props.props.hideA);
     var rightStyle = {
        
        textAlign: 'right'     
      };
     var category= this.props.category; 
     var hideCategory = 'hide'+category;
     // var hide= {this.props.props.hideCategory};
     console.log(hideCategory);
     // console.log(hide);
     
    return (<tr className= {'hide'+category+'-' + 'false'}><th>{this.props.category}</th>
    <th style={rightStyle}>Courses</th></tr>);
  }
});

var CourseRow = React.createClass({
  render: function() {
      
      var rightStyle = {
        
        textAlign: 'right'     
      };
      var name = this.props.course.stocked ?
      this.props.course.coursename :
      <span style={{color: 'red'}}>
        {this.props.course.coursename}
      </span>;
   
    return (
      <tr>
        <td>{name}</td>
        <td style={rightStyle}>{this.props.course.totalcourse}</td>
      </tr>
    );
  }
});

var CourseTable = React.createClass({
  render: function() {
    
    var rows = [];
    var lastCategory = null;
    this.props.courses.forEach(function(course) {
      if (course.coursename.indexOf(this.props.filterText) === -1 || (!course.stocked && this.props.inStockOnly)) {
        return;
      }
      if (course.category !== lastCategory) {
        rows.push(<CourseCategoryRow category={course.category} key={course.category} props={this.props}/>);
      }
      rows.push(<CourseRow course={course} key={course.coursename} />);
      lastCategory = course.category;
    }.bind(this));
    return (
      <Table responsive hover>
      {
        // <thead>
        //   <tr>
        //     <th>Name</th>
        //     <th>Price</th>
        //   </tr>
        // </thead>
      }
        <tbody>{rows}</tbody>
      </Table>
    );
  }
});
module.exports = CourseTable;