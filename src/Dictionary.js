import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);


    function handleResponse(response) {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    
    function search (event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001391cd1024cea4a09aec66630d42fbb8f";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Search for a word" className="form-control" autoFocus="on" onChange={handleKeywordChange} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <Results results={results} />
            <br />
            <Photos photos={photos} />
        </div>
    )
}