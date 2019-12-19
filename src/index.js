import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./components/Search/search";
import TerminalList from './components/TerminalLict/terminalList';
import Map from "./components/Map/map";
import "./index.css";

class App extends Component {

    state = {
        List: []
    }
    componentDidMount() {


        fetch('https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=Rivne')
            .then(response => response.json())
            .then(({ devices }) => {
                this.setState({ List: devices });
            }
            )
    }

    /* rewriteList=(ID)=>{
        const index = this.state.List.findIndex(elem => elem.ID === ID);
        let ListNew = [];
    } */
    render() {
        return (
            <div className="container text-center" >
                <Search></Search>
                <TerminalList
                    TermListArr={this.state.List}                
                ></TerminalList>
                <Map></Map>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

