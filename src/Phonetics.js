import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics (props) {
    return(
    <div> 
        <ReactAudioPlayer src={props.phonetics.audio} autoPlay={false} controls />
    <br />
    {props.phonetics.text}
    </div>);
}