import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import App from './components/App';
import CategoryListing from './components/CategoryListing';
import theme from './theme';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BreadcrumHome from './components/BreadcrumHome';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

class Home extends React.Component {

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
        <App appCnf={appCnf} onSearch={(string)=>{this.handleSearch(string)}}>
          <BreadcrumHome />
          <CategoryListing appCnf={appCnf} dataLink={dataLink} searchString={this.state.searchString} />
        </App>
      </ThemeProvider>

    )
  }
}
root.render( <Home />);

