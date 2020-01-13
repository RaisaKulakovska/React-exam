import React from 'react';
import "./search.css"

class Search extends React.Component {
state={
    city:""
};
getCity=(e)=>{
    this.setState({
        city:e.target.value
    })
};
onGetCity=()=>{
    this.props.onSearchCity(this.state.city);
};
    render() {
        return (
            <form className="form-inline justify-content-center row">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.getCity}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onGetCity}>Search</button>
            </form>
        )
    }
}
export default Search;