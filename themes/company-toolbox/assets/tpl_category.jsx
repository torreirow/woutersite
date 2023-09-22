import * as React from 'react';
import { createRoot } from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import App from './components/App';
import ResourceListing from './components/ResourceListing';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrum from './components/Breadcrum';

import Grid from '@mui/material/Grid';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    }
  }

  handleSearch(string){
    this.setState({searchString: string});
  }

  render() {
    return (
      <ThemeProvider theme={theme}>

        <CssBaseline />

        <App onSearch={(string)=>{this.handleSearch(string)}}>
          <Breadcrum dataLink={dataLink} />
          <ResourceListing dataLink={dataLink} appCnf={appCnf} searchString={this.state.searchString} />
        </App>

      </ThemeProvider>


    )
  }
}
root.render( <Category />);

