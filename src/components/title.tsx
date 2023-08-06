import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

//const logo = 'https://rehstorageprod.blob.core.windows.net/assets/free-leaves-icon.png'
const logo = 'http://assets.morganshaw.net/assets/free-leaves-icon.png'

interface Props {

}

interface State {

}

class Title extends React.Component<Props, State> {
  state = {}

  render() {
    return (
      <Toolbar>
        <img style={{ display: 'block', width: '40px', paddingRight: '10px' }} src={logo} alt="Green Company Logo" />
        <Typography
          component={'h1'}
          variant="subtitle1"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link to="/">Green Company</Link>
        </Typography>
        <Link to="/sign-in">
          <Button variant="outlined" size="small">
            Sign In
          </Button>
        </Link>
      </Toolbar>
    );
  }
}

export default Title;