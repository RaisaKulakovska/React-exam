import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <form className="form-inline justify-content-center row">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.props.getCity}>Search</button>
            </form>
        )
    }
}