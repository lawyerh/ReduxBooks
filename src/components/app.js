import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Added
import { createStore } from 'redux'; //Added
import rootReducer from '../reducers/index'; //Added

const store = createStore(rootReducer) //Added

import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BookList />
        </div>
      </Provider>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
