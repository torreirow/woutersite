import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteIconOutlined from '@mui/icons-material/FavoriteBorder';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import i18next from '../i18n'

export default class ResourceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarFavOpen : false,
      snackbarDelFavOpen : false,
      snackbarNoLinkOpen : false,
      dialogOpen : false,
    }
  }

  saveFav(itemId){
    if(this.isFav(itemId)){
      localStorage.removeItem("fav-resource-"+itemId);
      this.setState({snackbarDelFavOpen: true})
    }
    else{
      localStorage.setItem("fav-resource-"+itemId, true);
      this.setState({snackbarFavOpen: true})
    }
  }

  isFav(itemId){
    if(localStorage.getItem("fav-resource-"+itemId)){
      return true;
    }
    else{
      return false;
    }
  }


  render(){

    let image = this.props.itemData.image

    if(image.includes("no value")){
      image = "scholver.jpg";
    }

    const rules = this.props.appCnf.rewriteRules || [];


    return (
      <React.Fragment>

        <Snackbar anchorOrigin={{vertical: "top",horizontal: "center"}} open={this.state.snackbarFavOpen} autoHideDuration={2000} onClose={()=>{
          this.setState({snackbarFavOpen: false})
        }}>
          <Alert severity="success" sx={{ width: '100%' }}>
            {i18next.t('added_to_favorites')}
          </Alert>
        </Snackbar>

        <Snackbar anchorOrigin={{vertical: "top",horizontal: "center"}} open={this.state.snackbarDelFavOpen} autoHideDuration={2000} onClose={()=>{
          this.setState({snackbarDelFavOpen: false})
        }}>
          <Alert severity="success" sx={{ width: '100%' }}>
            {i18next.t('deleted_from_favorites')}
          </Alert>
        </Snackbar>

        <Snackbar anchorOrigin={{vertical: "top",horizontal: "center"}}  open={this.state.snackbarNoLinkOpen} autoHideDuration={2000} onClose={()=>{
          this.setState({snackbarNoLinkOpen: false})
        }}>
          <Alert severity="warning" sx={{ width: '100%' }}>
            {i18next.t('no_link_set')}
          </Alert>
        </Snackbar>

        <Dialog
          maxWidth="sm"
          fullWidth
          open={this.state.dialogOpen}
          onClose={()=>{
            this.setState({dialogOpen: false})
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {this.props.itemData.title}

            <IconButton
              onClick={()=>{
              this.setState({dialogOpen: false});
              }}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" >
              <div dangerouslySetInnerHTML={{__html:this.props.itemData.description.replace(/(?:\r\n|\r|\n)/g, '<br/>') }} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>

            <Tooltip title={
             (this.isFav(this.props.itemData.resource_id)?
               i18next.t('delete_x_from_favorites', {title: this.props.itemData.title})
                  :
               i18next.t('add_x_to_favorites', {title: this.props.itemData.title})
                )
              } >
              <IconButton

              sx={{
                position: 'absolute',
                left: 8,
                bottom: 8,
                color: (theme) => theme.palette.grey[500],
              }}

    onClick={(e)=>{
                this.saveFav(this.props.itemData.resource_id);
                e.stopPropagation();
              }}>
                {(this.isFav(this.props.itemData.resource_id)?
                  <FavoriteIcon />
                  :
                  <FavoriteIconOutlined />
                )}

              </IconButton>
            </Tooltip>

            {this.props.itemData.actions.map((actionItem, i) => (
              <Button key={actionItem.title}
                onClick={
                  ()=>{

                    let url = actionItem.url;
                    rules.forEach((rule)=>{
                      url = url.replace(rule.regex, rule.replace);
                    });

                    window.open(url)
                  }
                }
                size="small">{(i===0 ? "► " : "")}{actionItem.title}</Button>
            ))}
          </DialogActions>

        </Dialog>



        <Card
          elevation={2}
          sx={{
            minWidth: 100,
          }}
        >
          <CardActionArea
            onClick={
            (e)=>{
              if(this.props.itemData.actions.length > 0){

                let url = this.props.itemData.actions[0].url
                rules.forEach((rule)=>{
                  url = url.replace(rule.regex, rule.replace);
                });

                window.open(url)
              }
              else{
                this.setState({dialogOpen: true})
              }
            }
            }>

            <CardHeader
              action={

                <Tooltip title={(this.props.itemData.actions.length > 0 ?
                  i18next.t('more_info_and_options')
                  :
                  i18next.t('more_info')
                  )} arrow>
                  <IconButton onClick={(e)=>{
                    e.stopPropagation();
                    this.setState({dialogOpen: true})
                  }}>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>

              }
            />
            <Tooltip
              enterDelay={500}
              title={(this.props.itemData.actions.length > 0 ?
                this.props.itemData.actions[0].title
                :
                i18next.t('more_info')
              )}>

              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginTop: -5,
                  padding:0
                }}
              >
                <Avatar
                  sx={{ width: 72, height: 72, m: 1 }}
                  variant="rounded"
                  alt={this.props.itemData.title}
                  src={"/images/resources/" + image} />

                <Typography variant="body2" sx={{
                  height: 50

                  }} align="center" >
                  {this.props.itemData.title}
                </Typography>

              </CardContent>
            </Tooltip>
          </CardActionArea>
        </Card>
      </React.Fragment>
    );
  }
}
