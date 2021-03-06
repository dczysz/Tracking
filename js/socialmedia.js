/* https://github.com/RobinLinus/socialmedia-leak */
var platforms = [
    {
        domain: "https://500px.com",
        redirect: "/login?r=%2Ffavicon.ico",
        name: "500px"
    }, {
        domain: "https://www.academia.edu",
        redirect: "/login?cp=/favicon.ico&cs=www",
        name: "Academia"
    }, {
        domain: "https://www.airbnb.com",
        redirect: "/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
        name: "Airbnb"
    }, {
        domain: "https://www.amazon.com",
        redirect: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
        name: "Amazon"
    }, {
        domain: "https://eu.battle.net",
        redirect: "/login/de/index?ref=https://eu.battle.net/favicon.ico",
        name: "Battle.net"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
        name: "Blogger"
    }, {
        domain:"https://accounts.craigslist.org",
        redirect:"/login?rt=L&rp=%2ffavicon.ico&step=confirmation",
        name:"Craigslist"
    }, {
        domain: "https://disqus.com",
        redirect: "/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
        name: "Disqus"
    }, {
        domain: "https://www.dropbox.com",
        redirect: "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
        name: "Dropbox"
    }, {
        domain: "https://www.expedia.de",
        redirect: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
        name: "Expedia"
    }, {
        domain: "https://www.facebook.com",
        redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
        name: "Facebook"
    }, {
        domain: "https://de.foursquare.com",
        redirect: "/login?continue=%2Ffavicon.ico",
        name: "Foursquare"
    }, {
        domain: "https://github.com",
        redirect: "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
        name: "Github"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
        name: "Gmail"
    }, {
        domain: "https://news.ycombinator.com",
        redirect: "/login?goto=y18.gif%23",
        name: "Hackernews"
    }, {
        domain:"https://www.imdb.com",
        redirect:"/ap/signin?_encoding=UTF8&openid.assoc_handle=imdb_us&openid.claimed_id=http%3a%2f%2fspecs.openid.net%2fauth%2f2.0%2fidentifier_select&openid.identity=http%3a%2f%2fspecs.openid.net%2fauth%2f2.0%2fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3a%2f%2fspecs.openid.net%2fauth%2f2.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3a%2f%2fwww.imdb.com%2ffavicon.ico",
        name:"IMDb"
    }, {
        domain: "https://secure.indeed.com",
        redirect: "/account/login?continue=%2ffavicon.ico",
        name: "Indeed"
    }, {
        domain: "https://www.khanacademy.org",
        redirect: "/login?continue=https%3A//www.khanacademy.org/favicon.ico",
        name: "Khan Academy"
    }, {
        domain: "https://medium.com",
        redirect: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
        name: "Medium"
    }, {
        domain: "https://secure.meetup.com",
        redirect: "/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
        name: "Meetup"
    }, {
        domain: "https://www.paypal.com",
        redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
        name: "Paypal"
    }, {
        domain: "https://www.pinterest.com",
        redirect: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
        name: "Pinterest"
    }, {
        domain: "https://www.reddit.com",
        redirect: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
        name: "Reddit"
    }, {
        domain: "https://login.skype.com",
        redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
        name: "Skype"
    }, {
        domain: "https://slack.com",
        redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
        name: "Slack"
    }, {
        domain: "https://www.spotify.com",
        redirect: "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
        name: "Spotify"
    }, {
        domain: "https://squareup.com",
        redirect: "/login?return_to=%2Ffavicon.ico",
        name: "Square"
    }, {
        domain: "https://store.steampowered.com",
        redirect: "/login/?redir=favicon.ico",
        name: "Steam"
    }, {
        domain: "https://www.tumblr.com",
        redirect: "/login?redirect_to=%2Ffavicon.ico",
        name: "Tumblr"
    }, {
        domain:"https://www.twitch.tv",
        redirect:"/login?redirect_on_login=/favicon.ico",
        name:"Twitch"
    }, {
        domain: "https://vk.com",
        redirect: "/login?u=2&to=ZmF2aWNvbi5pY28-",
        name: "VK"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
        name: "Youtube"
    }
];


// Update social media table with favicons
$(document).ready(function() {

  // Don't send out a billion requests when I'm testing
  if (window.location.hostname === '127.0.0.1' || window.location.hostname === '') { // Atom-live-server or file:///C:/...
    // Add onClick() to section header to fetch images
    $('#socialSection h2')[0].setAttribute('onClick', 'loadImages()'); // Live page
  } else {
    loadImages();
  }
  showSection($('#socialSection')[0]);
});

// Load images, set onload to addCol()
function loadImages() {
  const imgSize = 24;

  // Try to load images, then set onLoad to show loaded image
  for (var i = 0; i < platforms.length; i++) {
    // Get current site
    var site = platforms[i];

    var img = document.createElement('img'),
        onLoadText = 'addCol(' + i + ', this)';

    img.setAttribute('onLoad', onLoadText);
    img.setAttribute('src', site.domain + site.redirect);
    img.setAttribute('height', imgSize);
  }
}

// Adds column to row of sites logged in
function addCol(index, img, breach = null) {
  const numColsLg = 6,
        numColsMd = 4,
        numColsSm = 3;
  var col = document.createElement('a');
  col.setAttribute('class', `col-${12/numColsSm} col-md-${12/numColsMd} col-lg-${12/numColsLg} text-center`);
  col.setAttribute('href', platforms[index].domain);
  col.setAttribute('target', '_blank');
  col.appendChild(img);

  var title = document.createElement('p'),
      titleText = document.createTextNode(platforms[index].name);

  title.appendChild(titleText);
  col.appendChild(title);
  $('#socialRow')[0].appendChild(col);



  // Hide #noSites
  if ($('#socialRow')[0].children.length != 0) {
    $('#socialSection .noLoad').addClass('d-none');
    $('#socialSection .didLoad').removeClass('d-none');

    console.log('\n-- Social Media Sites --');
  }
  // Log results to console
  console.log(`Logged into ${platforms[index].domain}`);
}

// Returns bootstrap row div with 2 columns of site names
function getSocialListRow() {
  var list = document.createElement('div'),
      row = document.createElement('div');
  row.setAttribute('class', 'row');
  for (var i = 0; i < platforms.length; i++) {
    var col = document.createElement('div');
    col.setAttribute('class', 'col-6');
    col.innerHTML = platforms[i].name;
    row.appendChild(col);
  }
  list.appendChild(row);
  return list.innerHTML;
}


/*
  These sites have been tried and didn't work or no longer work,
  most likely due to hosting favicon on cdn

  Kickstarter
  BoardGameGeek

{
    domain: "https://twitter.com",
    redirect: "/login?redirect_after_login=%2f..%2ffavicon.ico",
    name: "Twitter"
}, {
    domain: "https://discordapp.com",
    redirect: "/login?redirect_to=%2Fassets%2F07dca80a102d4149e9736d4b162cff6f.ico",
    name: "Discord"
}, {
    url: "https://login.live.com/login.srf?wa=wsignin1.0&wreply=https%3A%2F%2Fprofile.microsoft.com%2FregsysProfilecenter%2FImages%2FLogin.jpg",
    name: "Microsoft"
}, {
    url: "https://slack.com/signin?redir=%2Ffavicon.ico",
    name: "Slack"
}, {
    url: "https://tablet.www.linkedin.com/splash?redirect_url=https%3A%2F%2Fwww.linkedin.com%2Ffavicon.ico%3Fgid%3D54384%26trk%3Dfulpro_grplogo",
    name: "Linkedin",
	breach: "https://thehackernews.com/2016/05/linkedin-account-hack.html",
	breachYear: "2016"
}, {
    domain: "https://subscribe.washingtonpost.com/loginregistration/index.html#/register/group/default?action=login&destination=https:%2F%2Fwashingtonpost.com%2Ffavicon.ico",
    redirect: "/login/?previous=/favicon.ico",
    name: "Washington Post"
}, {
    domain: "https://www.instagram.com",
    redirect: "/accounts/login/?next=%2Ffavicon.ico",
    name: "Instagram"
} ,{
    domain: "https://www.spiegel.de",
    redirect: "/meinspiegel/login.html?backUrl=%2Ffavicon.ico",
    name: "Spiegel Online"
}, {
    domain: "http://www.youporn.com",
    redirect: "/login/?previous=/favicon.ico",
    name: "YouPorn"
}, {
    domain: "https://stackoverflow.com",
    redirect: "/users/login?ssrc=head&returnurl=http%3a%2f%2fstackoverflow.com%2ffavicon.ico",
    name: "Stack Overflow"
}, {
    domain: "https://www.netflix.com",
    redirect: "/Login?nextpage=%2Ffavicon.ico",
    name: "Netflix"
}, {
    domain: "https://www.flickr.com",
    redirect: "/signin/yahoo/?redir=https%3A%2F%2Fwww.flickr.com/favicon.ico",
    name: "Flickr"
}, {
    domain: "ubisoft.com",
    redirect: "connect.ubi.com",
    name: "Ubisoft"
} {
    domain: "https://courses.edx.org",
    redirect: "/login?next=/favicon.ico",
    name: "EdX"
}, {
    domain: "https://bitbucket.org",
    redirect: "/account/signin/?next=/favicon.ico",
    name: "BitBucket"
}, {
    domain: "https://carbonmade.com",
    redirect: "/signin?returnTo=favicon.ico",
    name: "Carbonmade"
},



*/
