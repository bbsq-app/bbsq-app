import React from 'react';
import './App.css';
import { Link } from 'react-router';
import LabelList from './components/CourseDetail/LabelList';
import TopicList from './components/CourseDetail/TopicList';
import {Grid, Row, Col}  from 'react-bootstrap';
import businessCourseDetail from './sampleData/BusinessCourseDetail/BusinessCourseDetail.json';
import ButtonType from './components/CourseDetail/ButtonType';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import MdAccessAlarm from 'react-icons/lib/md/access-alarm';
import MdViewColumn from 'react-icons/lib/md/view-column';
import TiEye from 'react-icons/lib/ti/eye';


var BUSINESSCOURSEDETAIL= businessCourseDetail;
var totaltime,category,totalvisit,intro,audience,coursecode,software,author,deliverytype;
var topics=[],subjects=[];
import Header from './components/Header';
var Breadcrumb = require('./components/Business/Breadcrumb.js');
var BusinessCourseDettail =  React.createClass({

  render() {
    var divStyle = {
         paddingLeft: '3em'  
    };
    var coursename=this.props.location.query.coursename;
    BUSINESSCOURSEDETAIL.forEach(function(data){
   
          if (data.coursename === coursename) {
            totaltime=data.totaltime;
            category=data.category;
            totalvisit=data.totalvisit;
            intro=data.intro;
            topics=data.topics;
            audience=data.audience;
            coursecode=data.coursecode;
            subjects=data.subjects;     
            software=data.software;
            author=data.author;
            deliverytype=data.deliverytype;
          }
    });
   //console.log(topics)
    return (

    <div className="BusinessCourseDettail">  
     <Header/>
      <div className="container">
        <br/>
        <Grid>
            <Row className="show-grid">
              <Col xs={6} md={3} style={divStyle}>
                
                <br/><br/><br/>
                <h4><Link to="/Business" color="#FFFFFF"><FaAngleDoubleLeft/>GO BACK</Link></h4>
                <Link to="/" color="#FFFFFF"><FaAngleDoubleLeft/>Course List</Link><br/>
                <Link to="/AssignedLearning" color="#FFFFFF"><FaAngleDoubleLeft/>Assigned Learning</Link><br/>
                <Link to="/LearningHistory" color="#FFFFFF"><FaAngleDoubleLeft/>Learning History</Link><br/><br/>
              </Col>

              <div className="container">
              <Col xs={12} md={9} style={divStyle}>
                  <div className="verticalLine">&nbsp;</div>
                  <Breadcrumb/>
                  <h1> {coursename} </h1><br/>
                  <MdAccessAlarm color='#178CC6'/>{totaltime} 
                  <span className='spaced'> <MdViewColumn color='#178CC6'/>{category}</span>
                  <span className='spaced'> <TiEye color='#178CC6'/>{totalvisit}</span><br/><br/>
                  <p>{intro}</p>
                  <b>Topics include:</b><br/>
                  <TopicList topicList={topics}/>
                  <br/><b>Audience:</b><br/>
                  {audience}<br/>
                  <br/><b>Course Code:</b>{coursecode}<br/>
                  <br/><b className="labelLeft">Subjects:</b><LabelList labelList={subjects}/><br/>
                  <br/><b className="labelLeft">Software:</b><LabelList labelList={software}/><br/>
                  <br/><b className="labelLeft">Author:</b><LabelList labelList={author}/><br/>

                  <br/>
                  <ButtonType
                    deliverytype={deliverytype}
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

module.exports = BusinessCourseDettail;

