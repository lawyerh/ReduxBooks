import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (

        <div>
          <BookList />
        </div>

    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
