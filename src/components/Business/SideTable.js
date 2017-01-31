import React from 'react';
import {Link} from 'react-router';
var SideRow = React.createClass({
  render: function() {
           
    return (
      <tr>
        <td color='#7F898E'><Link to="/">{this.props.data.name}</Link> ({this.props.data.totalcourse}) </td>
      </tr>
    );
  }
});


var SideTable = React.createClass({
 render: function() {
   
  var rows = [];
   this.props.data.forEach(function(data) {
       rows.push(<SideRow data={data} key={data.name} category={data.name}/>);
  });
    
    return (

      <div>
    	<table>
          <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
});
module.exports = SideTable;