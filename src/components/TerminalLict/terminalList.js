import React, { Fragment } from 'react';
import TerminalItem from "./TerminalItem/terminalItem";
import "./TerminalItem/terminalItem.css";
import uuid from "uuid";
import Search from "../Search/search"

const TerminalList = ({ TermListArr, getCity }) => {

    console.log("Terminal List => ", TermListArr);
    const termIt = TermListArr.map((it) => {
        let ID = uuid.v4();
        return <TerminalItem
            key={ID}
            latitude={it.latitude}
            longitude={it.longitude}
            fullAddressUa={it.fullAddressUa}
            placeUa={it.placeUa}
            cityUA={it.cityUA}        
        ></TerminalItem>
    })



    return (
        <Fragment>
            {termIt}
        </Fragment>
    )


}

export default TerminalList;