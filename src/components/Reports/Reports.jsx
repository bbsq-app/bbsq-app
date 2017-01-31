import React from 'react';
import '../../App.css';

import myTeamData from '../../sampleData/Training/myTeam.json';
var MYTEAM= myTeamData;
import Header from '../Header';
var Breadcrumb = require('../Business/Breadcrumb.js');
var ReportsTable = require('./ReportsTable.jsx');

var Reports =  React.createClass({
  render() {
    return (

    <div className="Reports">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> REPORTS </h1>
          
       </div>
       <div className="container">
          <ReportsTable 
            myTeam={MYTEAM}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = Reports;

