// 臉書分享，帶入縮圖、標題、簡介、網址
// 需要 facebook app id
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1669185643393851',
    xfbml      : true,
    version    : 'v2.8',
    status		 : true,
    cookie		 : true,
    xfbml			 : true
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function postToFeed(title, desc, url, image) {
    var obj = {method: 'feed',link: url, picture: image,name: title,description: desc};
    function callback(response) {}
    FB.ui(obj, callback);
}

var fbShareBtn = document.querySelector('.hiv_facebook_share');
fbShareBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var title = fbShareBtn.getAttribute('data-fbtitle'),
        desc = fbShareBtn.getAttribute('data-fbdesc'),
        url = fbShareBtn.getAttribute('data-fblink'),
        image = fbShareBtn.getAttribute('data-fbimg');
    postToFeed(title, desc, url, image);

    return false;
});