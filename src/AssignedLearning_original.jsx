import React from 'react';
import './App.css';
import {Button,Navbar,FormGroup,FormControl,ControlLabel}  from 'react-bootstrap';

import assignedLearningData from './sampleData/AssignedLearning/assignedLearning.json';
var ASSIGNEDLEARNING= assignedLearningData;
import Header from './components/Header';
var Breadcrumb = require('./components/Business/Breadcrumb.js');
var AssignedTable = require('./components/AssignedLearning/AssignedTable.js');
var SearchBarDefault = require('./components/AssignedLearning/SearchBarDefault.js');

var createPdf = require('pdfmake-browserified-0.1.18');
//var test ={ content: 'This is ' }

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

