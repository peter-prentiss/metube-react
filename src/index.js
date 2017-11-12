import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyBI71IWoxEsq7WFNuEHLnp-yucGJx9tSXA';
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);