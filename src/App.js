import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import ToDoPage from './pages/ToDoPage/ToDoPage';
import FormPage from './pages/FormPage/FormPage';

// import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={ToDoPage} />
        <Route path="/todo" component={FormPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
