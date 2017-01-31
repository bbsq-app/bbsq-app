import React from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router'

//window.sessionStorage.setItem("1","bar");
var CourseCategoryRow = React.createClass({

  render: function() {
   
     // var rightStyle = {
        
     //    textAlign: 'right'     
     //  };
     // var leftStyle = {
        
     //    textAlign: 'left'     
     //  };
     var category= this.props.category;
     var hideToggle; 
      if (category === 'Hash') {
       hideToggle=this.props.props.hideHash;
      }
     else if (category === 'A') {
       hideToggle= this.props.props.hideA;
      }
     else if (category === 'B') {hideToggle=this.props.props.hideB; } else if (category === 'C') {hideToggle=this.props.props.hideC; } else if (category === 'D') {hideToggle=this.props.props.hideD; } else if (category ==='E') {hideToggle=this.props.props.hideE; } else if (category === 'F') {hideToggle=this.props.props.hideF; } else if (category === 'G') {hideToggle=this.props.props.hideG; } else if (category === 'H') {hideToggle=this.props.props.hideH; } else if (category === 'I') {hideToggle=this.props.props.hideI; } else if (category === 'J') {hideToggle=this.props.props.hideJ; } else if (category === 'K') {hideToggle=this.props.props.hideK; } else if (category === 'L') {hideToggle= this.props.props.hideL; } else if (category === 'M') {hideToggle= this.props.props.hideM; } else if (category === 'N') {hideToggle= this.props.props.hideN; } else if (category === 'O') {hideToggle= this.props.props.hideO; } else if (category === 'P') {hideToggle= this.props.props.hideP; } else if (category === 'Q') {hideToggle= this.props.props.hideQ; } else if (category === 'R') {hideToggle= this.props.props.hideR; } else if (category === 'S') {hideToggle= this.props.props.hideS; } else if (category === 'T') {hideToggle= this.props.props.hideT; } else if (category === 'U') {hideToggle= this.props.props.hideU; } else if (category === 'V') {hideToggle= this.props.props.hideV; } else if (category === 'W') {hideToggle= this.props.props.hideW; } else if (category === 'X') {hideToggle= this.props.props.hideX; } else if (category === 'Y') {hideToggle= this.props.props.hideY; } else if (category === 'Z') {hideToggle= this.props.props.hideZ; } // var hideCategory = hide+category;
        
    return (<div><br/><tr className={'hide'+category+'-' + hideToggle}><th>{this.props.category}</th>
    </tr></div>);
   // <th style={rightStyle}>Courses</th>
  }
});

var CourseRow = React.createClass({
  render: function() {
      
      var rightStyle = {
        
        textAlign: 'right',  
        color: '#178CC6'   
      };

      var category= this.props.category; 
      var hideToggle; 
      if (category === 'Hash') {
       hideToggle=this.props.props.hideHash;
      }
     else if (category === 'A') {
       hideToggle= this.props.props.hideA;
      }
     else if (category === 'B') {hideToggle=this.props.props.hideB; } else if (category === 'C') {hideToggle=this.props.props.hideC; } else if (category === 'D') {hideToggle=this.props.props.hideD; } else if (category ==='E') {hideToggle=this.props.props.hideE; } else if (category === 'F') {hideToggle=this.props.props.hideF; } else if (category === 'G') {hideToggle=this.props.props.hideG; } else if (category === 'H') {hideToggle=this.props.props.hideH; } else if (category === 'I') {hideToggle=this.props.props.hideI; } else if (category === 'J') {hideToggle=this.props.props.hideJ; } else if (category === 'K') {hideToggle=this.props.props.hideK; } else if (category === 'L') {hideToggle= this.props.props.hideL; } else if (category === 'M') {hideToggle= this.props.props.hideM; } else if (category === 'N') {hideToggle= this.props.props.hideN; } else if (category === 'O') {hideToggle= this.props.props.hideO; } else if (category === 'P') {hideToggle= this.props.props.hideP; } else if (category === 'Q') {hideToggle= this.props.props.hideQ; } else if (category === 'R') {hideToggle= this.props.props.hideR; } else if (category === 'S') {hideToggle= this.props.props.hideS; } else if (category === 'T') {hideToggle= this.props.props.hideT; } else if (category === 'U') {hideToggle= this.props.props.hideU; } else if (category === 'V') {hideToggle= this.props.props.hideV; } else if (category === 'W') {hideToggle= this.props.props.hideW; } else if (category === 'X') {hideToggle= this.props.props.hideX; } else if (category === 'Y') {hideToggle= this.props.props.hideY; } else if (category === 'Z') {hideToggle= this.props.props.hideZ; }
   
    return (
      <tr className={'hide'+category+'-' + hideToggle}>
        <td>{this.props.course.coursename}</td>
        <td style={rightStyle}><Link to="/Course/" query={{coursename:this.props.course.coursename}}>({this.props.course.totalcourse})</Link></td>
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
      rows.push(<CourseRow course={course} key={course.coursename} category={course.category} props={this.props} />);
      lastCategory = course.category;
    }.bind(this));
    return (
      <Table responsive hover striped>
      {
        // <thead>
        //   <tr>
        //     <th>Course Category</th>
        //     <th>Courses</th>
        //   </tr>
        // </thead>
      }
        <tbody>{rows}</tbody>

      </Table>
    );
  }
});
module.exports = CourseTable;