import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default class CategoryCard extends React.Component {
  render(){
    return (
      <Card
        sx={{
          display: 'flex',
          cursor: 'pointer',
          minWidth: 350,
          height: 120
        }}
        onClick={
          ()=>{
            window.location.href = this.props.itemData.rel_permalink.substring(0,this.props.itemData.rel_permalink.lastIndexOf('/'));
            var link = this.props.itemData.rel_permalink.substring(0,this.props.itemData.rel_permalink.lastIndexOf('/'));
            if(link.slice(-1) !== '/'){
              link = link + '/';
            }
            window.location.href = link;
          }
        }
      >
        <CardMedia
          component="img"
          sx={{
            maxWidth: 151
          }}
          image={"/images/categories/" + this.props.itemData.image}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6">
              {this.props.itemData.title}
            </Typography>
            <Typography>
            <div style={{height: 100, textOverflow: "ellipsis", overflow: 'hidden'}} dangerouslySetInnerHTML={{__html:this.props.itemData.description.replace(/(?:\r\n|\r|\n)/g, '<br/>') }} />
            </Typography>
          </CardContent>
        </Box>
      </Card>
    );
  }
}
