import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import BusinessCourseDetail from './BusinessCourseDetail';
import Business from './Business';
import AssignedLearning from './AssignedLearning';
import LearningHistory from './LearningHistory';
import MyTeam from './components/Training/MyTeam';
import AssignTraining from './components/Training/AssignTraining';
import AssignTrainingStep2 from './components/Training/AssignTrainingStep2';
import AssignTrainingStep3 from './components/Training/AssignTrainingStep3';
import AssignTrainingStep4 from './components/Training/AssignTrainingStep4';
import RemoveTraining from './components/Training/RemoveTraining';
import RemoveTrainingStep2 from './components/Training/RemoveTrainingStep2';
import RemoveTrainingStep3 from './components/Training/RemoveTrainingStep3';
import Reports from './components/Reports/Reports';

import { Router, Route, hashHistory} from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
   	<Route path="/Course(/:data)" component={Business} />
   	<Route path="/CourseDetail(/:data)" component={BusinessCourseDetail} />
   	<Route path="/AssignedLearning" component={AssignedLearning} />
   	<Route path="/LearningHistory" component={LearningHistory} />
   	<Route path="/MyTeam" component={MyTeam} />
   	<Route path="/AssignTraining" component={AssignTraining} />
   	<Route path="/AssignTrainingStep2(/:data)" component={AssignTrainingStep2} />
   	<Route path="/AssignTrainingStep3(/:data)" component={AssignTrainingStep3} />
   	<Route path="/AssignTrainingStep4(/:data)" component={AssignTrainingStep4} />
    <Route path="/RemoveTraining" component={RemoveTraining} />
    <Route path="/RemoveTrainingStep2(/:data)" component={RemoveTrainingStep2} />
    <Route path="/RemoveTrainingStep3(/:data)" component={RemoveTrainingStep3} />
    <Route path="/Reports" component={Reports} />
  </Router>,
  document.getElementById('root')
);

