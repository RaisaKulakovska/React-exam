import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./components/Search/search";
import TerminalList from './components/TerminalLict/terminalList';
import Map from "./components/Map/map";
import "./index.css";

class App extends Component {

    state = {
        List: [],
        city: "Rivne"
    }
    componentDidMount() {
        console.log("cdm", this.state.city)
        const {city}=this.state;
        fetch(
            `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${city}`
            )
            .then(response => response.json())
            .then(({ devices }) => {
                this.setState({ 
                    List: devices 
                });
            });
    };
componentDidUpdate(){
     onSearchCity=(i)=>{
         
        fetch(
            `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${i}`
        )
        .then(response=>response.json())
        .then(({devices})=>{
            console.log(devices)
        })
    }
} 
    
    render() {
        return (
            <div className="container text-center" >
                <Search onSearchCity={this.onSearchCity}></Search>
                <TerminalList
                    TermListArr={this.state.List}                
                ></TerminalList>
                <Map></Map>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

