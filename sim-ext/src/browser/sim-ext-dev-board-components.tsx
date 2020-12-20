import * as React from 'react';
import * as CSS from 'csstype';

export function SsDec (props: any) {
    return (
        <svg id="SsDec" preserveAspectRatio="xMidYMid meet" viewBox="30 33 65 124" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#111" strokeWidth="1.5" x="29.136" y="32.413" width="64.193" height="123.425" id="svg_1" stroke="#000" opacity="0.5" />
            <ellipse className="ss7_line" fill="#222" stroke="#333" strokeWidth="3" strokeOpacity="null" fillOpacity="null" filter="url(#svg_127_blur)" ry="2.321" rx="2.425" cy="143.624" cx="84.676" id="ss7_dp" />
            <line className="ss7_line" fill="#222" stroke="#333" strokeWidth="4" strokeOpacity="null" fillOpacity="null" x1="41.075" y1="95.817" x2="80.71" y2="95.817" id="ss7_g" strokeLinejoin="bevel" strokeLinecap="round" />
            <line className="ss7_line" fill="#222" stroke="#333" strokeWidth="4" strokeOpacity="null" fillOpacity="null" x1="20.11" y1="72.179" x2="59.189" y2="72.179" id="ss7_f" strokeLinejoin="bevel" strokeLinecap="round"  transform="matrix(0, 1, -1, 0, 111.828501, 32.529501)"/>
            <line className="ss7_line" fill="#222" stroke="#333" strokeWidth="4" strokeOpacity="null" fillOpacity="null" x1="20.11" y1="113.053" x2="59.189" y2="113.053" id="ss7_e" strokeLinejoin="bevel" strokeLinecap="round" transform="matrix(0, 1, -1, 0, 152.702501, 73.403502)"/>
            <line className="ss7_line" fill="#222" stroke="#333" strokeWidth="4" strokeOpacity="null" fillOpacity="null" x1="41.075" y1="133.21" x2="80.71" y2="133.21" id="ss7_d" strokeLinejoin="bevel" strokeLinecap="round" />
            <line className="ss7_line" fill="#222" stroke="#333" strokeWidth="4" strokeOpacity="null" fillOpacity="null" x1="62.422" y1="112.707" x2="101.731" y2="112.707" id="ss7_c" strokeLinejoin="bevel" strokeLinecap="round" transform="matrix(0, 1, -1, 0, 194.783503, 30.630499)"/>
            <line className="ss7_line" fill="#222" stroke="#333" strokeWidth="4" strokeOpacity="null" fillOpacity="null" x1="62.422" y1="71.833" x2="101.732" y2="71.833" id="ss7_b" strokeLinejoin="bevel" strokeLinecap="round" transform="matrix(0, 1, -1, 0, 153.910002, -10.244001)"/>
            <line className="ss7_line" fill="#222" stroke="#333" strokeWidth="4" strokeOpacity="null" fillOpacity="null" x1="41.075" y1="51.556" x2="80.71" y2="51.556" id="ss7_a" strokeLinejoin="bevel" strokeLinecap="round" />
        </svg>
    );
}

export function Led (props: any) {
    const ledStyle: CSS.Properties = {
        width: props.size,
        backgroundColor: props.color,
    };

    return (
        <div id="Led" className={props.className} style={ledStyle}></div>
    );
}

export function LedArr (props: any) {
    let ledarrStyle: CSS.Properties = {
        flexDirection: 'row',
    }

    let leds = [];
    for (var i = 0; i < props.num; i++) {
        leds.push(<Led size={props.lsize} color={'rgb(52,0,0)'} key={i} />);
    }

    return (
        <div id="LedArr" style={ledarrStyle}>
            {leds}
        </div>
    );
}

export function PushButton (props: any) {
    return (
        <div id="PushButton" onMouseDown={(event) => {props.onClick();}} onMouseUp={(event) => {}}>
            <p>{props.label}</p>
        </div>
    );
}

export function PushButtonGrid(props: any) {
    let labelArr = props.labels;
    if (!labelArr) {
        labelArr = Array(props.ncols * props.nrows);
        for (let i = 0; i < labelArr.length; i++) {
            labelArr[i] = i;
        }
    }

    let buttons = [];

    for (let i = 0; i < labelArr.length; i++) {
        buttons.push(<PushButton key={i} label={labelArr[i]} onClick={() => props.onClick(props.name, i)} />);
    }
    buttons.reverse();

    let gridTempColVal: string = '';
    for (let i = 0; i < props.ncols; i++) {
        gridTempColVal += '1fr ';
    }

    let pbgridStyle: CSS.Properties = {
        gridTemplateColumns: gridTempColVal,
    };

    return (
        <div className={props.className} id="PushButtonGrid" style={pbgridStyle}>
            {buttons}
        </div>
    );
}