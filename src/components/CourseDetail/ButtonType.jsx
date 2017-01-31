import React from 'react';
import {Button}  from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
import instructorLedTrainingData from '../../sampleData/BusinessCourseDetail/instructorLedTraining.json';

var ButtonType = React.createClass({
getInitialState: function () {
    return { registerVisible: false, launchVisible: false };
},
componentWillMount(){
  //console.log("mount");
  if (this.props.deliverytype === 'Instructor Led') {
        this.setState({registerVisible: true});
        //console.log("mount");
  }
  else{
    this.setState({launchVisible: true});
    //console.log("no");
  } 
},
registerFormatter: function(cell, row){
 // return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
 return '<Button class="btn btn-success">Register</Button>';
},
render: function() {
// if (this.state.registerVisible) {
//   instructorLedTrainingData.forEach
// }  
    return (
      
          <div>
              	<Button className={this.state.registerVisible ? 'hidden': ''} bsStyle="primary">Launch</Button>
               {
               // <Button className={this.state.launchVisible ? 'hidden': ''} bsStyle="success">Register</Button>
               }
                <div className={this.state.launchVisible ? 'hidden': ''}>
                  <BootstrapTable data={instructorLedTrainingData} striped={true} hover={true}>
                    <TableHeaderColumn isKey={true} dataSort={true} dataField="startdate" width={'150'}>Start Date</TableHeaderColumn>
                    <TableHeaderColumn dataField="timezone" width={'160'}>Time Zone</TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} dataField="location">Location/City</TableHeaderColumn>
                    <TableHeaderColumn dataField="seats" width={'50'}>Seats</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" width={'50'}>Price</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataFormat={this.registerFormatter} width={'100'}>Register</TableHeaderColumn>
                </BootstrapTable>
                </div>
          </div>
     
    );
  }
});
module.exports = ButtonType;