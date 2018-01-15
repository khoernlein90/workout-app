import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import WorkoutNew from "./workouts/WorkoutNew";
// import WorkoutEdit from "./workouts/WorkoutEdit";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            {/* <Route exact path="/workouts/:id" component={WorkoutEdit} /> */}
            <Route exact path="/workouts/new" component={WorkoutNew} />
            <Route exact path="/workouts" component={Dashboard} />
            <Route exact path="/" component={Landing} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
