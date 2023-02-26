var continar= document.getElementById("frame");
var navopen=false;
var news = new Array() ;
var con1 = document.getElementById("con1");
var con2 = document.getElementById("con2");
const RSS_CNN = "https://arabic.cnn.com/api/v1/rss/world/rss.xml";
const RSS_almasryalyoum ="https://www.almasryalyoum.com/rss/rssfeed";
function openchat () {
   continar.src="chat/index.html" ; 
}
function opensignup () {
   continar.src="longin/signup.html";
   closeNav();
}
function opensignin () {
   continar.src="longin/signin.html" ; 
   closeNav();
}
function opensearch() {
   continar.src="search/index.html" ; 
   closeNav();

}
function openprofile() {
   continar.src="profile/index.html" ; 
   closeNav();

}


fetch(RSS_CNN)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
  
  const items = data.querySelectorAll("item");

    var imgs = data.querySelectorAll("media");
 for( let i =0 ; i<10 ;i++) {
   news.push({key:news.length});
 var serializer = new XMLSerializer();
var xmlString = serializer.serializeToString(items[i].querySelector("description"));
xmlString = xmlString.slice(22 , xmlString.length-17);
   news[news.length-1].description = xmlString ;
   xmlString = serializer.serializeToString(items[i].querySelector("link"));
   xmlString = xmlString.slice(6 , xmlString.length-7);
      news[news.length-1].link = xmlString ; 
      xmlString = serializer.serializeToString(items[i].querySelector("title"));
   xmlString = xmlString.slice(16 , xmlString.length-11);
      news[news.length-1].title = xmlString ;  
      xmlString = serializer.serializeToString(items[i]);
   xmlString = xmlString.slice(xmlString.indexOf('url='), xmlString.indexOf('">' ,xmlString.indexOf('url=')));
   xmlString = xmlString.slice(5 );
      news[news.length-1].img = xmlString ;
      xmlString = serializer.serializeToString(items[i]);
      xmlString = xmlString.slice(xmlString.indexOf('<media:text>'), xmlString.indexOf('</media:text>'));
      xmlString = xmlString.slice(12 );
         news[news.length-1].imginf = xmlString ;
         xmlString = serializer.serializeToString(items[i]);
         xmlString = xmlString.slice(xmlString.indexOf('<p>'), xmlString.lastIndexOf('</p>'));
         xmlString = xmlString.slice(3);
            news[news.length-1].p = xmlString ;
            xmlString = serializer.serializeToString(items[i]);
         xmlString = xmlString.slice(xmlString.indexOf('<pubDate>'), xmlString.lastIndexOf('</pubDate>'));
         xmlString = xmlString.slice(9 , -5);
            news[news.length-1].pubDate = xmlString ;

            con2.innerHTML+='<div class="news" > <h3 class="title">'+news[news.length-1].title+'</h3> <img class="img" src='+news[news.length-1].img+' >  <h6 class="pubDate">'+news[news.length-1].pubDate+'</h6><h4 class="description">'+news[news.length-1].description+' <a href='+news[news.length-1].link+'>  المزيد </a> </h4> </div> ';

     }
     
     });

     fetch(RSS_almasryalyoum)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
  
  const items = data.querySelectorAll("item");
  

    var imgs = data.querySelectorAll("media");
 for( let i =0 ; i<9 ;i++) {
   news.push({key:news.length});
 var serializer = new XMLSerializer();
var xmlString = serializer.serializeToString(items[i].querySelector("description"));
xmlString = xmlString.slice(xmlString.indexOf("/&gt;"));
   xmlString = xmlString.slice(5 , xmlString.length-24);
   news[news.length-1].description = xmlString ;
   console.log(news[news.length-1].description);
   xmlString = serializer.serializeToString(items[i].querySelector("link"));
   xmlString = xmlString.slice(6 , xmlString.length-7);
      news[news.length-1].link = xmlString ; 
      xmlString = serializer.serializeToString(items[i].querySelector("title"));
   xmlString = xmlString.slice(7 , xmlString.length-8);
      news[news.length-1].title = xmlString ;  
      xmlString = serializer.serializeToString(items[i].querySelector("description"));
   xmlString = xmlString.slice(xmlString.indexOf("src='"), xmlString.indexOf("'" ,xmlString.lastIndexOf("src='")+7));
   xmlString = xmlString.slice(5);
      news[news.length-1].img = xmlString ;

                  xmlString = serializer.serializeToString(items[i]);
         xmlString = xmlString.slice(xmlString.indexOf('<pubDate>'), xmlString.lastIndexOf('</pubDate>'));
         xmlString = xmlString.slice(9 , -5);
            news[news.length-1].pubDate = xmlString ;

con1.innerHTML+='<div class="news" > <h3 class="title">'+news[news.length-1].title+'</h3> <img class="img" src='+news[news.length-1].img+' >  <h6 class="pubDate">'+news[news.length-1].pubDate+'</h6><h4 class="description">'+news[news.length-1].description+' <a href='+news[news.length-1].link+'>  المزيد </a> </h4> </div> ';


     }
     
     });

     /* Set the width of the side navigation to 250px */
function openNav() {
  
  navopen=true;
  document.getElementById("X").style.zIndex=5;
   document.getElementById("mySidenav").style.width = "30%";
   document.getElementById("mySidenav").style.height = "100%";
 }
 
 /* Set the width of the side navigation to 0 */
 function closeNav() {
   if (navopen){
   navopen=false;}
    else { document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("X").style.zIndex=0; }
}

