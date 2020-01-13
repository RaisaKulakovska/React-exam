import React, { Fragment } from 'react';
import TerminalItem from "./TerminalItem/terminalItem";
import "./TerminalItem/terminalItem.css";
import uuid from "uuid";

const TerminalList = ({ TermListArr}) => {

    //console.log("Terminal List => ", TermListArr);
    const termIt = TermListArr.map((item) => {
        let ID = uuid.v4();
        return <TerminalItem
            key={ID}
            latitude={item.latitude}
            longitude={item.longitude}
            fullAddressUa={item.fullAddressUa}
            placeUa={item.placeUa}
            cityUA={item.cityUA}        
        ></TerminalItem>
    })



    return (
        <Fragment>
            {termIt}
        </Fragment>
    )


}

export default TerminalList;