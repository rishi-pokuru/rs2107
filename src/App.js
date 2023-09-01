import React from 'react';
import './style.css';
import SearchCriteriaMonth from './searchCriteria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header';
import Data from './data';

export default function App() {
  return (
    <div className="p-2">
      <Header color="green" style="bold" size="3">
        Label
      </Header>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <SearchCriteriaMonth />
          </Route>
          <Route path="/result">
            <Data />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
