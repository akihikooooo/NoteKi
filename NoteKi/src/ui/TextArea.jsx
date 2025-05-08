import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import styles from './textArea.module.css';

export default function TextArea(props) {
    return(
        <>
        <div className="flex flex-col w-full h-full bg-main p-4 overflow-hidden rounded-sm">
            <div id="header"
                className="">
                    <div className={styles.input}>
                        <input type="text"
                            className={`w-full h-10 rounded-sm p-2 
                                text-black font-montserrat text-3xl font-bold
                                outline-none stroke-yellow-50`}placeholder="Title..."
                            onChange={(e) => props.onInputChange(e.target.value)}/>
                    </div>
                    <p className="text-gray-500 font-montserrat text-sm">Created on: MM.DD.YYYY HH:MM:t</p>
                </div>
            </div>
        </>
    )
}