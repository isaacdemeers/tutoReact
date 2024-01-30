"use client"
import { useState } from 'react';

let count = 0;

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        if (value) return;
        count++;
        if (count % 2 === 0) setValue('O');
        else {
            setValue('X');
        } console.log('click');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}
