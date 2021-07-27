import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetics from "./Phonetics";

export default function Results(props) {
    if (props.results) {
    return (
        <div className="Results">
            <section>
            <h2>
                {props.results.word}
            </h2>
            <br />
            {props.results.phonetics.map(function (phonetics, index) {
                return (
                    <div key={index}>
                        <Phonetics phonetics={phonetics} />
                    </div>
                );
                })}
            </section>
            <br />
            <section>
            {props.results.meanings.map(function (meaning, index) {
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )
            })}
            </section>
        </div>
    )
    } else {
        return null;
    }

}