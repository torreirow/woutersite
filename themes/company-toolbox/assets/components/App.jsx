import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import SearchAppBar from './SearchAppBar';
import BreadcrumHome from './BreadcrumHome';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.timeout = 0;
  }

  handleOnSearch(string){
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.onSearch(string)
    }, 300);
  }

  render(){
    return (
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <SearchAppBar appCnf={appCnf} onSearch={(string)=>{this.handleOnSearch(string)}}/>
          { this.props.children }
        </Box>
      </Container>
    );
  }

}

