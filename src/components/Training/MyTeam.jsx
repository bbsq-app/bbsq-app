import React from 'react';
import '../../App.css';

import myTeamData from '../../sampleData/Training/myTeam.json';
var MYTEAM= myTeamData;
import Header from '../Header';
var Breadcrumb = require('../Business/Breadcrumb.js');
var MyTeamTable = require('../Training/MyTeamTable.jsx');

var MyTeam =  React.createClass({
  render() {
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> MY TEAM </h1>
          
       </div>
       <div className="container">
          <MyTeamTable 
            myTeam={MYTEAM}
          />
        </div>  
        
      </div>
   
     
    );
  }

});

module.exports = MyTeam;

