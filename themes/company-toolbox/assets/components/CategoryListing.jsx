import * as React from 'react';
import Grid from '@mui/material/Grid';
import CategoryCard from './CategoryCard';
import ResourceCard from './ResourceCard';
import Typography from '@mui/material/Typography';

export default class CategoryListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories : [],
      resources : []
    }
  }

  readDataLink() {
    return fetch(this.props.dataLink)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          categories: responseJson.data,
          resources: responseJson.resources
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.readDataLink();
  }

  catCard(catData){
    return (
      <Grid item key={catData.title} xs={12} sm={10} md={6} lg={3.5} xl={3}>
        <CategoryCard itemData={catData} />
      </Grid>
    )
  }
  resourceCard(resource){
    return (
      <Grid item key={resource.title} xs={6} sm={3.5} md={2.5} lg={2.2} xl={2}>
        <ResourceCard itemData={resource} appCnf={this.props.appCnf}/>
      </Grid>
    )
  }

  renderMatchingResources(resources){

    if(resources.length > 0){

      return(
        <React.Fragment>
          <Typography component="div" variant="h6">
            Gevonden items met "{this.props.searchString}"
          </Typography>

          <Grid container spacing={4} sx={{ py: 2 }}>
            {resources}
          </Grid>
        </React.Fragment>
      )
    }
  }

  render() {
    let title = "Alle categorieën";
    let cats = this.state.categories.map((catData) => this.catCard(catData))
    let allMatchingResources = []


    let favItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i).startsWith('fav-resource-')){
        let item = this.state.resources[localStorage.key(i).substring(13)];
        if(item){
          favItems.push(item);
        }
      }
    }

    let favs = "";
    if(favItems.length > 0){

      const favRenders = favItems.map((resource) => {
        return this.resourceCard(resource)
      });

      favs = (
      <React.Fragment>
        <Typography component="div" variant="h6">
          Favorieten
        </Typography>

        <Grid container spacing={4} sx={{ py: 2 }}>
          {favRenders}
        </Grid>

      </React.Fragment>

      )

    }

    if(this.props.searchString != ""){
      title = "Gevonden categorieën met \"" + this.props.searchString + "\"";
      cats = this.state.categories.map((catData) => {

        let matchingResources = catData.resources.filter((resource)=>{
          if(resource.search.includes(this.props.searchString.toLowerCase())){
            return true;
          }
        }).map((resource) => {
          return this.resourceCard(resource)
        });

        allMatchingResources = allMatchingResources.concat(matchingResources);

        if(catData.search.includes(this.props.searchString.toLowerCase())){
          return this.catCard(catData)
        }
      })
    }

    return (
      <React.Fragment>
        { (this.props.searchString === "" ? favs : null)}

        <Typography component="div" variant="h6">
          {title}
        </Typography>

        <div style={{flexGrow: 1}}>
          <Grid container spacing={4} sx={{ py: 2 }}>
            {cats}
          </Grid>
        </div>

        { (this.props.searchString !== "" ? this.renderMatchingResources(allMatchingResources) : null)}


      </React.Fragment>
    );
  }
}


