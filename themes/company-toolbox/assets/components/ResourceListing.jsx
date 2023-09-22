import * as React from 'react';
import Grid from '@mui/material/Grid';
import ResourceCard from './ResourceCard';
import Typography from '@mui/material/Typography';

export default class ResourceListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resources : [],
      catData : {}
    }
  }

  readDataLink() {
    return fetch(this.props.dataLink)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          resources: responseJson.data.resources,
          catData: responseJson.data
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.readDataLink();
  }

  resourceCard(resource){
    return (
      <Grid item key={resource.title} xs={6} sm={3.5} md={2.5} lg={2.2} xl={2}>
        <ResourceCard itemData={resource} appCnf={this.props.appCnf}/>
      </Grid>
    )
  }

  render() {

    let title = this.state.catData.title
    let resources = this.state.resources.map((resource) => this.resourceCard(resource))

    if(this.props.searchString != ""){
      title = "Zoek naar \"" + this.props.searchString + "\" in " + this.state.catData.title;
      resources = this.state.resources.map((resource) => {
        if(resource.title.toLowerCase().includes(this.props.searchString.toLowerCase())){
          return this.resourceCard(resource)
        }
      })
    }

    return (
      <React.Fragment>
        <Typography component="div" variant="h6">
          {title}
        </Typography>

        <div style={{flexGrow: 1}}>
          <Grid container spacing={4} sx={{
            py: 2,
            px: 2,
          }}>
            {resources}
          </Grid>
        </div>
      </React.Fragment>

    );
  }
}


