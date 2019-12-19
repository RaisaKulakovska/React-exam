import React, { Component } from 'react';
import "./terminalItem.css"

class TerminalItem extends React.Component {

    state = {
        fullAddressUa: this.props.fullAddressUa,
        placeUa: this.props.placeUa,
        cityUA: this.props.cityUA
    }

    render() {
        const { fullAddressUa, placeUa, cityUA } = this.state;
        return (
            <div className="termIt row mx-auto my-2" onClick={this.props.getMap}>
                <div className="col-4"><h6>Адреса: {fullAddressUa}</h6></div>
                <div className="col-4"><h6>Розташування: {placeUa}</h6></div>
                <div className="col-4"><h6>Місто: {cityUA}</h6></div>
            </div>
        )
    }
}

export default TerminalItem;