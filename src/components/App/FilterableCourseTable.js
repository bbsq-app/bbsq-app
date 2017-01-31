import React from 'react';

var SearchBar = require('./SearchBar.js');
var CourseTable = require('./CourseTable.js');
var Page = require('./Page.js');


var FilterableCourseTable =  React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      hideHash: false,
      hideA: false, hideB: false, hideC: false, hideD: false, hideE: false, hideF: false, hideG: false, hideH: false, hideI: false, hideJ: false, hideK: false, hideL: false, hideM: false, hideN: false, hideO: false, hideP: false, hideQ: false, hideR: false, hideS: false, hideT: false, hideU: false, hideV: false, hideW: false, hideX: false, hideY: false, hideZ: false 
    };
    
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
        
    });
  },
  restToggle: function(){
    console.log("return");
    this.setState(this.getInitialState());
    
  },
  toggleHash: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){
    event.preventDefault();
    //this.restToggle();
    this.setState({hideHash: this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); 
  },
  
  toggleA: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){
    event.preventDefault();
    this.setState({hideHash: !this.state.hideHash, hideA : this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); 
  },
  toggleB: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleC: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleD: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleE: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleF: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleG: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleH: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleI: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleJ: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleK: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleL: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleM: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleN: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleO: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleP: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleQ: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleR: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleS: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleT: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleU: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleV: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleW: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleX: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : this.state.hideX, hideY : !this.state.hideY, hideZ : !this.state.hideZ}); }, toggleY: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : this.state.hideY, hideZ : !this.state.hideZ}); }, toggleZ: function(event,hideHash,hideA,hideB,hideC,hideD,hideE,hideF,hideG,hideH,hideI,hideJ,hideK,hideL,hideM,hideN,hideO,hideP,hideQ,hideR,hideS,hideT,hideU,hideV,hideW,hideX,hideY,hideZ){event.preventDefault(); this.setState({hideHash: !this.state.hideHash, hideA : !this.state.hideA, hideB : !this.state.hideB, hideC : !this.state.hideC, hideD : !this.state.hideD, hideE : !this.state.hideE, hideF : !this.state.hideF, hideG : !this.state.hideG, hideH : !this.state.hideH, hideI : !this.state.hideI, hideJ : !this.state.hideJ, hideK : !this.state.hideK, hideL : !this.state.hideL, hideM : !this.state.hideM, hideN : !this.state.hideN, hideO : !this.state.hideO, hideP : !this.state.hideP, hideQ : !this.state.hideQ, hideR : !this.state.hideR, hideS : !this.state.hideS, hideT : !this.state.hideT, hideU : !this.state.hideU, hideV : !this.state.hideV, hideW : !this.state.hideW, hideX : !this.state.hideX, hideY : !this.state.hideY, hideZ : this.state.hideZ}); },

  render: function() {
    return (
      <div className="container">
        <Page 
          toggleButtonHash={this.toggleHash}
          toggleButtonA={this.toggleA} toggleButtonB={this.toggleB} toggleButtonC={this.toggleC} toggleButtonD={this.toggleD} toggleButtonE={this.toggleE} toggleButtonF={this.toggleF} toggleButtonG={this.toggleG} toggleButtonH={this.toggleH} toggleButtonI={this.toggleI} toggleButtonJ={this.toggleJ} toggleButtonK={this.toggleK} toggleButtonL={this.toggleL} toggleButtonM={this.toggleM} toggleButtonN={this.toggleN} toggleButtonO={this.toggleO} toggleButtonP={this.toggleP} toggleButtonQ={this.toggleQ} toggleButtonR={this.toggleR} toggleButtonS={this.toggleS} toggleButtonT={this.toggleT} toggleButtonU={this.toggleU} toggleButtonV={this.toggleV} toggleButtonW={this.toggleW} toggleButtonX={this.toggleX} toggleButtonY={this.toggleY} toggleButtonZ={this.toggleZ}

        />
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <CourseTable
          courses={this.props.courses}
          filterText={this.state.filterText}
          hideHash={this.state.hideHash}
          hideA={this.state.hideA} hideB={this.state.hideB} hideC={this.state.hideC} hideD={this.state.hideD} hideE={this.state.hideE} hideF={this.state.hideF} hideG={this.state.hideG} hideH={this.state.hideH} hideI={this.state.hideI} hideJ={this.state.hideJ} hideK={this.state.hideK} hideL={this.state.hideL} hideM={this.state.hideM} hideN={this.state.hideN} hideO={this.state.hideO} hideP={this.state.hideP} hideQ={this.state.hideQ} hideR={this.state.hideR} hideS={this.state.hideS} hideT={this.state.hideT} hideU={this.state.hideU} hideV={this.state.hideV} hideW={this.state.hideW} hideX={this.state.hideX} hideY={this.state.hideY} hideZ={this.state.hideZ} />
      </div>
    );
  }
});

module.exports = FilterableCourseTable;

