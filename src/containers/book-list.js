import React, { Component } from 'react';
import { connect } from 'react-redux';
import rootReducer from '../reducers/index';

import   selectBook from '../actions/selectBook';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map( (book) => {
            return (
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className='list-group-item'>{book.title}</li>
            );
        })
    }

    render() {
        return (
            <ul className='list-group col-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state)
{
    return{
        books: state.books
    };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called the result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote bookList from component to a container.
//Makes dispatch available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 