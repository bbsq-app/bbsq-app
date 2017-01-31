import React from 'react';
import {Link} from 'react-router';
import '../../App.css';
import {Button,Jumbotron,Row,Col,FormGroup,FormControl}  from 'react-bootstrap';
import Header from '../Header';
var Breadcrumb = require('../Business/Breadcrumb.js');

var DatePicker = require('react-datepicker');
var moment = require('react-datepicker/node_modules/moment');
require('bootstrap');
require('react-datepicker/dist/react-datepicker.css');


var AssignTrainingStep3 = React.createClass({

getInitialState: function() {

    return {
      startDate: moment()

    };
    
  },

handleChange: function(date) {
    
   // date= date.format("YYYY/MM/DD");
    this.setState({
      startDate: date

    });
    
  },   
render(){
  
  var assigntrainingList=this.props.location.query.assigntrainingList;
  var empList=this.props.location.query.empList;
 // console.log(this.props.location.query);

	var centerStyle={
	  padding: '70px 0',
    textAlign: 'center'
	
	};
	//console.log(this.state.startDate.format("YYYY/MM/DD"));
    return (
      <div className="Business">  
     <Header/>
      <div className="container">
        <Breadcrumb/>
        <h1> ASSIGN TRAINING </h1>
      Step Three: Select Due Date 
      <Link to='/AssignTrainingStep4/' query={{empList:empList, assigntrainingList:assigntrainingList, date:this.state.startDate.format("YYYY/MM/DD")}}><Button bsStyle="primary" className="myTeam">Next</Button></Link>
      <Link to="/AssignTrainingStep2"><Button className="greyColor">Back</Button></Link><br/>
      
      <Row className="show-grid" style={centerStyle}>
	      <Col md={6} mdPush={6}>
	      	<Jumbotron >
    	   		<h4>VARIABLE DATE</h4>
    			<FormGroup controlId="formControlsSelect">
			      <FormControl componentClass="select" placeholder="select">
			        <option value="select1">HIRE DATE + 30 DAYS</option>
			        <option value="select2">HIRE DATE + 60 DAYS</option>
			        <option value="select3">HIRE DATE + 90 DAYS</option>
			        <option value="select4">HIRE DATE + 120 DAYS</option>
			        <option value="select5">TODAY'S DATE + 30 DAYS</option>
			        <option value="select6">TODAY'S DATE + 60 DAYS</option>
			        <option value="select7">TODAY'S DATE + 90 DAYS</option>
			        <option value="select8">TODAY'S DATE + 1200 DAYS</option>
			      </FormControl>
			    </FormGroup>
			   
  	  		</Jumbotron>
	      </Col>
	      <Col md={6} mdPull={6}>
	      	<Jumbotron>
		    	   <h4>FIXED DATE</h4>
		    
				   <DatePicker
						inline
            dateFormat="YYYY/MM/DD"
						selected={this.state.startDate}
						onChange={this.handleChange} />
  	  		</Jumbotron>
	      </Col>
      </Row><br/>

      <Link to='/AssignTrainingStep4/' query={{empList:empList, assigntrainingList:assigntrainingList, date:this.state.startDate.format("YYYY/MM/DD")}}><Button bsStyle="primary" className="myTeam">Next</Button></Link>
      <Link to="/AssignTrainingStep2" query={{empList:empList}}><Button className="greyColor">Back</Button></Link><br/><br/><br/>

      
       
      </div>
      </div>
     
     
    );
  }
});
module.exports = AssignTrainingStep3;