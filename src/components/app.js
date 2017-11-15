import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBI71IWoxEsq7WFNuEHLnp-yucGJx9tSXA';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards ' }, videos => {
            this.setState({ videos })
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;