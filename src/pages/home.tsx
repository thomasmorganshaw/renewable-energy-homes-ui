import React from 'react';
import Grid from '@mui/material/Grid';
import Axios, { AxiosError } from 'axios';
import Search from '../components/search';
import SearchResult from '../components/searchResult';
import Map from '../components/map';
import CircularProgress from '@mui/material/CircularProgress';
import Feature from '../components/feature';

interface HomeProps {

}

interface HomeState {

}

class Home extends React.Component<HomeProps, HomeState> {
    state = {
        isSearching: false,
        searchResults: null,
        postcodeCoordinates: null,
        hasResult: false
    }

    handleSearch = async (postcode: String) => {
        console.log("search", postcode)
        this.resetState();

        this.setState({
            isSearching: true,
            hasResult: false
        })

        var url = `${process.env.REACT_APP_API_BASE_URL}/property/search/${postcode}`
        var response: any = await Axios
            .get(url)
            .catch(() => this.handleError)

        console.log("search response", response)

        var coordinates = null;
        if (response.data.propertySales.length > 0) {
            coordinates = {
                latitude: response.data.propertySales[0].latitude,
                longitude: response.data.propertySales[0].longitude
            }
        }

        this.setState({
            postcodeCoordinates: coordinates,
            searchResults: response.data.propertySales,
            isSearching: false,
            hasResult: true
        })
    };

    handleError = (err: AxiosError) => {
        console.error("ERROR!", err)
    }

    showSearchResults = () => {
        return !this.state.isSearching && this.state.searchResults !== null;
    }

    showMap = () => {
        return !this.state.isSearching && this.state.hasResult;
        //&& this.state.postcodeCoordinates !== null
    }

    resetState = () => {
        this.setState({
            searchResults: null,
            postcodeCoordinates: null
        })
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Feature />
                    <Search onSearch={this.handleSearch} />
                </Grid>
                <Grid item xs={12} md={this.state.isSearching ? 12 : 6}>
                    {this.state.isSearching && <div className="App-spinner"><CircularProgress /></div>}
                    {this.showSearchResults() && <SearchResult results={this.state.searchResults} />}

                </Grid>
                <Grid item xs={12} md={6}>
                    {this.showMap() && <Map coordinates={this.state.postcodeCoordinates} />}
                </Grid>
            </Grid>
        );
    }
}

export default Home;