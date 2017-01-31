import React from 'react';
import './App.css';
import {Button,Navbar,FormGroup,FormControl,ControlLabel}  from 'react-bootstrap';

import assignedLearningData from './sampleData/AssignedLearning/assignedLearning.json';
var ASSIGNEDLEARNING= assignedLearningData;
import Header from './components/Header';
var Breadcrumb = require('./components/Business/Breadcrumb.js');
//var AssignedTable = require('./components/AssignedLearning/AssignedTable.js');
var SearchBarDefault = require('./components/AssignedLearning/SearchBarDefault.js');
var createPdf = require('pdfmake-browserified-0.1.18');

import {Table}  from 'react-bootstrap';
import {Link} from 'react-router';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaSort from 'react-icons/lib/fa/sort';
var test ={ content: 'This is ' }
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

var AssignedLearning =  React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      content: { content: 'This is an sample PDF printed with pdfMake' }
    };  
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },
  handleupdateContent: function(content) {
    this.setState({
      content: content
    });
  },

  onPrint: function() {
    console.log("inside print")
    createPdf(test).open();
   //mountCreatePdfApp.createPdf(docDefinition).save();

},


  render() {
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> ASSIGNED LEARNING </h1>
          <Navbar.Form pullLeft>
                <SearchBarDefault 
                filterText={this.state.filterText}
                onUserInput={this.handleUserInput}
                />
          </Navbar.Form>  
          <Navbar.Form pullRight> 
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Per Page</ControlLabel>&nbsp;&nbsp;
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">25</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>&nbsp;&nbsp;
                <Button bsStyle="primary" onClick={this.onPrint}>Export PDF</Button>&nbsp;
                <Button bsStyle="primary">Export CSV</Button>

          </Navbar.Form>
          
       </div>
       <div className="container">
          <AssignedTable 
            assignedLearning={ASSIGNEDLEARNING}
            filterText={this.state.filterText}
            content={this.state.content}
            updateContent={this.handleupdateContent}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = AssignedLearning;

