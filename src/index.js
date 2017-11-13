import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyBI71IWoxEsq7WFNuEHLnp-yucGJx9tSXA';

YTSearch({ key: API_KEY, term: 'surfboards '}, function(data) {
    console.log(data);
});

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