import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import './App.css';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: []};
    //Use async to get response
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="app ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;