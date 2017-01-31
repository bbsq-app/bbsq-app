import React from 'react';
import {Link} from 'react-router';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
import {Button}  from 'react-bootstrap';
require('bootstrap');

var assigntrainingList=[];
var RemoveTrainingTableStep2 = React.createClass({
clearData: function(){
  assigntrainingList=[]
  
} ,  
onRowSelect: function(row, isSelected){
  if(isSelected){
    assigntrainingList.push(row.training);
  }
  else if(!isSelected){
    var index=assigntrainingList.indexOf(row.training);
    assigntrainingList.splice(index,1);
  }  
},

onSelectAll: function(isSelected){
  if(isSelected){
       this.props.assignTrainingStep2.forEach(function(data){
            assigntrainingList.push(data.training);
      }); 
  }
  else if(!isSelected){
    assigntrainingList=[];
  }
},


 render: function() {
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: this.onRowSelect,
      onSelectAll: this.onSelectAll
    };
    var empList= this.props.empList;

    assigntrainingList=[]; 
    return (
      <div>   
     
      Step Two: Select Training<br/><br/> 
      

      <BootstrapTable data={this.props.assignTrainingStep2} striped={true} hover={true} selectRow={selectRowProp} search={true}>
              <TableHeaderColumn isKey={true} dataSort={true} dataField="training">TRAINING</TableHeaderColumn>
              
       </BootstrapTable><br/>

      <Link to="/RemoveTrainingStep3" query={{empList:empList,assigntrainingList:assigntrainingList}}><Button bsStyle="primary" className="myTeam">Next</Button></Link>
      <Link to="/RemoveTraining"><Button onClick={this.clearData} className="greyColor">Back</Button></Link><br/><br/>
      </div>
     
     
    );
  }
});
module.exports = RemoveTrainingTableStep2;