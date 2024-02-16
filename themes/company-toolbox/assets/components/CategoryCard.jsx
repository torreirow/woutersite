import * as React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const fabrands = ["500px","accessible-icon","accusoft","acquisitions-incorporated","adn","adobe","adversal","affiliatetheme","airbnb","algolia","alipay","amazon-pay","amazon","amilia","android","angellist","angrycreative","angular","app-store-ios","app-store","apper","apple-pay","apple","artstation","asymmetrik","atlassian","audible","autoprefixer","avianex","aviato","aws","bandcamp","battle-net","behance-square","behance","bimobject","bitbucket","bitcoin","bity","black-tie","blackberry","blogger-b","blogger","bluetooth-b","bluetooth","bootstrap","btc","buffer","buromobelexperte","buysellads","canadian-maple-leaf","cc-amazon-pay","cc-amex","cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","centercode","centos","chrome","chromecast","cloudscale","cloudsmith","cloudversify","codepen","codiepie","confluence","connectdevelop","contao","cpanel","creative-commons-by","creative-commons-nc-eu","creative-commons-nc-jp","creative-commons-nc","creative-commons-nd","creative-commons-pd-alt","creative-commons-pd","creative-commons-remix","creative-commons-sa","creative-commons-sampling-plus","creative-commons-sampling","creative-commons-share","creative-commons-zero","creative-commons","critical-role","css3-alt","css3","cuttlefish","d-and-d-beyond","d-and-d","dashcube","delicious","deploydog","deskpro","dev","deviantart","dhl","diaspora","digg","digital-ocean","discord","discourse","dochub","docker","draft2digital","dribbble-square","dribbble","dropbox","drupal","dyalog","earlybirds","ebay","edge","elementor","ello","ember","empire","envira","erlang","ethereum","etsy","evernote","expeditedssl","facebook-f","facebook-messenger","facebook-square","facebook","fantasy-flight-games","fedex","fedora","figma","firefox","first-order-alt","first-order","firstdraft","flickr","flipboard","fly","font-awesome-alt","font-awesome-flag","font-awesome-logo-full","font-awesome","fonticons-fi","fonticons","fort-awesome-alt","fort-awesome","forumbee","foursquare","free-code-camp","freebsd","fulcrum","galactic-republic","galactic-senate","get-pocket","gg-circle","gg","git-square","git","github-alt","github-square","github","gitkraken","gitlab","gitter","glide-g","glide","gofore","goodreads-g","goodreads","google-drive","google-play","google-plus-g","google-plus-square","google-plus","google-wallet","google","gratipay","grav","gripfire","grunt","gulp","hacker-news-square","hacker-news","hackerrank","hips","hire-a-helper","hooli","hornbill","hotjar","houzz","html5","hubspot","imdb","index.json","index.txt","instagram","intercom","internet-explorer","invision","ioxhost","itch-io","itunes-note","itunes","java","jedi-order","jenkins","jira","joget","joomla","js-square","js","jsfiddle","kaggle","keybase","keycdn","kickstarter-k","kickstarter","korvue","laravel","lastfm-square","lastfm","leanpub","less","line","linkedin-in","linkedin","linode","linux","lyft","magento","mailchimp","mandalorian","markdown","mastodon","maxcdn","medapps","medium-m","medium","medrt","meetup","megaport","mendeley","microsoft","mix","mixcloud","mizuni","modx","monero","napster","neos","nimblr","nintendo-switch","node-js","node","npm","ns8","nutritionix","odnoklassniki-square","odnoklassniki","old-republic","opencart","openid","opera","optin-monster","osi","page4","pagelines","palfed","patreon","paypal","penny-arcade","periscope","phabricator","phoenix-framework","phoenix-squadron","php","pied-piper-alt","pied-piper-hat","pied-piper-pp","pied-piper","pinterest-p","pinterest-square","pinterest","playstation","product-hunt","pushed","python","qq","quinscape","quora","r-project","raspberry-pi","ravelry","react","reacteurope","readme","rebel","red-river","reddit-alien","reddit-square","reddit","redhat","renren","replyd","researchgate","resolving","rev","rocketchat","rockrms","safari","salesforce","sass","schlix","scribd","searchengin","sellcast","sellsy","servicestack","shirtsinbulk","shopware","simplybuilt","sistrix","sith","sketch","skyatlas","skype","slack-hash","slack","slideshare","snapchat-ghost","snapchat-square","snapchat","soundcloud","sourcetree","speakap","speaker-deck","spotify","squarespace","stack-exchange","stack-overflow","staylinked","steam-square","steam-symbol","steam","sticker-mule","strava","stripe-s","stripe","studiovinari","stumbleupon-circle","stumbleupon","superpowers","supple","suse","symfony","teamspeak","telegram-plane","telegram","tencent-weibo","the-red-yeti","themeco","themeisle","think-peaks","trade-federation","trello","tripadvisor","tumblr-square","tumblr","twitch","twitter-square","twitter","typo3","uber","ubuntu","uikit","uniregistry","untappd","ups","usb","usps","ussunnah","vaadin","viacoin","viadeo-square","viadeo","viber","vimeo-square","vimeo-v","vimeo","vine","vk","vnv","vuejs","waze","weebly","weibo","weixin","whatsapp-square","whatsapp","whmcs","wikipedia-w","windows","wix","wizards-of-the-coast","wolf-pack-battalion","wordpress-simple","wordpress","wpbeginner","wpexplorer","wpforms","wpressr","xbox","xing-square","xing","y-combinator","yahoo","yammer","yandex-international","yandex","yarn","yelp","yoast","youtube-square","youtube","zhihu"];

export default class CategoryCard extends React.Component {

  camelToUnderscore(key) {
    var result = key.replace( /([A-Z])/g, " $1" );
    var icon_result = result.split(' ').join('-').toLowerCase().substring(4);
    var icon_group = "fa-solid";
    if(fabrands.includes(icon_result)){
      icon_group = "fa-brands";
    }
    return `${icon_group} fa-${icon_result}`
  }

  render(){

    let icon = this.props.itemData.fonticonpicker;
    const camelToSnakeCase = icon => icon.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    return (
      <Card
        sx={{
          cursor: 'pointer',
          height: 130
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
        <CardContent sx={{ flex: '1 0 auto', "flexDirection": "row", alignItems: "start", display:"flex"}}>
          <div style={{display:"inline-block", padding:"10px 20px 10px 10px"}}>
              <i style={{fontSize: '80px', margin: '0px', color: this.props.itemData.icon_color}} class={this.camelToUnderscore(this.props.itemData.fonticonpicker)}></i>
            </div>
          <div style={{display:"inline-block", minWidth: "200px"}}>
              <Typography component="div" variant="h6">
                {this.props.itemData.title}
              </Typography>
              <Typography>
                <div dangerouslySetInnerHTML={{__html:this.props.itemData.description.replace(/(?:\r\n|\r|\n)/g, '<br/>') }} />
              </Typography>
            </div>
          </CardContent>
      </Card>
    );
  }
}
