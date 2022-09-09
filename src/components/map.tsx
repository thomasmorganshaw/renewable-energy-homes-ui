import * as React from 'react';
import GoogleMap from './googleMap';
import Card from '@mui/material/Card';

interface Props {
    coordinates: any;
}

interface State {

}

class Map extends React.Component<Props, State> {
    state = {
        zoom: 12,
        lat: this.props.coordinates?.Latitude,
        lng: this.props.coordinates?.Longitude
    }

    showGoogleMap = () => {
        return this.props.coordinates?.Latitude && this.props.coordinates?.Longitude;
    }

    render() {
        return (
            <>
                {!this.showGoogleMap() && <Card className="App-no-map">Oops! We couldn't find that on the map.</Card>}
                {this.showGoogleMap() && <GoogleMap zoom={this.state.zoom} latitude={this.state.lat} longitude={this.state.lng} />}
            </>
        );
    }
}

export default Map;