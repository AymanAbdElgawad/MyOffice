var continar= document.getElementById("frame");
var navopen=false;
var news = new Array() ;
var con1 = document.getElementById("con1");
var con2 = document.getElementById("con2");
const RSS_CNN = "https://arabic.cnn.com/api/v1/rss/world/rss.xml";
const RSS_almasryalyoum ="https://www.almasryalyoum.com/rss/rssfeed?sectionId=78";


     fetch(RSS_almasryalyoum)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
  
  const items = data.querySelectorAll("item");
  

    var imgs = data.querySelectorAll("media");
 for( let i =0 ; i<items.length ;i++) {
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
if (i%2==0){
con1.innerHTML+='<div class="news" > <h3 class="title">'+news[news.length-1].title+'</h3> <img class="img" src='+news[news.length-1].img+' >  <h6 class="pubDate">'+news[news.length-1].pubDate+'</h6><h4 class="description">'+news[news.length-1].description+' <a href='+news[news.length-1].link+'>  المزيد </a> </h4> </div> ';
}
else{
   con2.innerHTML+='<div class="news" > <h3 class="title">'+news[news.length-1].title+'</h3> <img class="img" src='+news[news.length-1].img+' >  <h6 class="pubDate">'+news[news.length-1].pubDate+'</h6><h4 class="description">'+news[news.length-1].description+' <a href='+news[news.length-1].link+'>  المزيد </a> </h4> </div> ';
   }

     }
     
     });

   