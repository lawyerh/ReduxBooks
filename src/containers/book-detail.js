import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component
{
    render(){
        if(this.props.book)
        {
            return (
                <div>
                    <h3>
                        {this.props.book.title}
                    </h3>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    No Book Selected!
                </div>
            )
        }
    };
};

function mapStateToProps(state)
{
    console.log(state);
    return {
        book: state.ActiveBook
    };
}



export default connect(mapStateToProps)(BookDetail);