import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component
{
    render(){
        console.log(`i am the console log!!! ${JSON.stringify(this.props)}`);
        if(this.props.book)
        {
            return (
                <div>
                    {this.props.book.title}
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