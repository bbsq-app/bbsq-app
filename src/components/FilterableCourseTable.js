import React from 'react';

var SearchBar = require('./SearchBar.js');
var CourseTable = require('./CourseTable.js');
var Page = require('./Page.js');


var FilterableCourseTable =  React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false,
      hideA: 'hi',
      hideB: false,
      hideC: false      
      
    };
    
  },

  handleUserInput: function(filterText,inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
      
    });
  },

  toggleA: function(e,hideB,hideC){
    e.preventDefault();
    //this.setState({hide: !this.state.hide});
    this.setState({hideA: 'test'});
    console.log(!this.state.hideB);
  },
  

  render: function() {
    return (
      <div className="container">
        {this.state.hideA}
        <Page ref='neel'
          hideA={this.state.hideA}
          hideB={this.state.hideB}
          hideC={this.state.hideC}

        />
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
          
        />
        <CourseTable
          courses={this.props.courses}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          hideA={this.state.hideA}
          hideB={this.state.hideB}
          hideC={this.state.hideC}
        />
      </div>
    );
  }
});

module.exports = FilterableCourseTable;


