import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

// const homeIcon = 'https://rehstorageprod.blob.core.windows.net/assets/home-icon.png'
// const solarIcon = 'https://rehstorageprod.blob.core.windows.net/assets/solar-icon.png'
// const windIcon = 'https://rehstorageprod.blob.core.windows.net/assets/wind-icon.png'
// const evIcon = 'https://rehstorageprod.blob.core.windows.net/assets/ev-icon.png'

const homeIcon = 'http://assets.morganshaw.net/assets/home-icon.png'
const solarIcon = 'http://assets.morganshaw.net/assets/solar-icon.png'
const windIcon = 'http://assets.morganshaw.net/assets/wind-icon.png'
const evIcon = 'http://assets.morganshaw.net/assets/ev-icon.png'

interface Props {
  feature: Feature
}

interface State {

}

class Feature {
  code: string
  label: string
  // propertyFeatureId: number
  // propertyId: number
}

class PropertyFeature extends React.Component<Props, State> {
  state = {}

  getIcon(code: string) {
    switch (code) {
      case "BSU": return homeIcon
      case "SPRI": return solarIcon
      case "WTG": return windIcon
      case "EVCP": return evIcon
      default: return;
    }
  }

  render() {
    return (
      <Tooltip title={this.props.feature.label}>
        <img
          style={{ display: 'block', width: '40px', paddingRight: '10px', float: 'left' }}
          src={this.getIcon(this.props.feature.code)}
          alt={this.props.feature.label} />
      </Tooltip>
    );
  }
}

export default PropertyFeature;