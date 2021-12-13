import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import App from './Component/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducer';
import reduxThunk from 'redux-thunk';
import UsersList from './Component/UsersList';
import Home from './Component/Home';
import UserPosts from './Component/UserPosts';

const store = createStore(allReducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userslist' element={<UsersList />} />
          <Route path='/posts' element={<UserPosts />} />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
