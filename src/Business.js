import React from 'react';
import './App.css';
import {Grid, Row, Col}  from 'react-bootstrap';
import businessData from './sampleData/Business/businessData.json';
import businessTopics from './sampleData/Business/businessTopics.json';
import skillLevel from './sampleData/Business/skillLevel.json';
import businessSoftware from './sampleData/Business/businessSoftware.json';
import deliveryType from './sampleData/Business/deliveryType.json';
var BUSINESS= businessData;
var BUSINESSTOPICS = businessTopics;
var SKILLLEVEL= skillLevel;
var BUSINESSSOFTWARE= businessSoftware;
var DELIVERYTYPE= deliveryType;

import Header from './components/Header';
var Breadcrumb = require('./components/Business/Breadcrumb.js');
var BusinessTable = require('./components/Business/BusinessTable.js');
var SideTable = require('./components/Business/SideTable.js');

var Business =  React.createClass({
  
  render() {
    var divStyle = {
         paddingLeft: '0px'  
    };
    var coursename=this.props.location.query.coursename;
    return (

    <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> {coursename} </h1>
        <p>Explore a wide range of business skills from project management and negotiation to leadership skills and online marketing strategy. Our professional development 
          tutorials can help you learn SEO, spreadsheets, word processing, and more.
        </p>
        <Grid>
            <Row className="show-grid">
              <Col xs={6} md={3} style={divStyle}>
                <h4>Business Topics</h4>
                <SideTable data={BUSINESSTOPICS}/><br/>
                <h4>Skill Level</h4>
                <SideTable data={SKILLLEVEL}/><br/>
                <h4>Business Software</h4>
                <SideTable data={BUSINESSSOFTWARE}/><br/>
                <h4>Delivery Type</h4>
                <SideTable data={DELIVERYTYPE}/><br/>
              </Col>
              <div className="container">
              <Col xs={12} md={9} style={divStyle}>
                  <BusinessTable 
                    business={BUSINESS}
                    coursename={coursename}
                  />

              </Col>
              </div>     
            </Row>
        </Grid>    
      </div>
    </div>
     
    );
  }

});

module.exports = Business;

