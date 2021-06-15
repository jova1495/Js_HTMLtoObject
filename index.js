var str= 
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="static/styles.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Alata&family=Fugaz+One&family=Lobster&family=Quicksand:wght@300&family=Syncopate:wght@700&display=swap"
      rel="stylesheet"
    />
    <title>Magazine</title>
  </head>
  <body class="background">
    <header>
      <div class="header">
        <p class="secondary-title">Care &</p>
        <h1 class="title">Selflove</h1>
      </div>
    </header>
    <section id="body-magazine">
      <div class="circle">
        <h2 class="number">1160</h2>
        <h3>Legends of beauty</h3>
      </div>
      <div class="container right">
        <h2 class="bigger">SMART FILTERS</h2>
        <h3 class="right1">Add metalic effect to monochrome</h3>
      </div>
      <div class="container left">
        <h2 class="bigger">ÚNICA E IRREPETIBLE</h2>
        <h3 class="content">"Ser fŕagil no es ser débil, la fragilidad nos hace únicos."</h3>
      </div>
    </section>
    <footer>
      <div class="right footer">
        <p class="smaller">This your</p>
        <p class="bigger">Moment</p>
      </div>
    </footer>
  </body>
</html>`;

var tag = document.createElement("div");
tag.innerHTML = str;

htmlObject = {
  heading: "",
  subHeading: "",
  articles: [],
  motivationalPhrase: []
}
var z = 0;
var t = tag.getElementsByTagName("*");
var ele = [];
let status = "";
let AuxHeading = "";
let AuxDescription = "";


for (var i = 0; i < t.length; i++) {
  if(t[i].tagName == "HEADER") status = "Header";
  if(t[i].tagName == "SECTION") status = "Section";
  if(t[i].tagName == "FOOTER") status = "Footer";
  
  if(status == "Header"){
    if(t[i].tagName == "H1") htmlObject.heading = t[i].innerHTML;
    if(t[i].tagName == "P") htmlObject.subHeading = t[i].innerHTML;
  }
  
  if(status == "Section"){
    if(t[i].tagName == "H2") AuxHeading = t[i].innerHTML;
    if(t[i].tagName == "H3") AuxDescription = t[i].innerHTML;
    if(AuxHeading.length>0 && AuxDescription.length>0){
    htmlObject.articles.push({heading: AuxHeading, Description: AuxDescription}); 
    AuxHeading = "";
    AuxSubHeading = "";
    }
  }

  if(status == "Footer"){
    if(t[i].tagName == "P") htmlObject.motivationalPhrase.push(t[i].innerHTML);
  }
}
console.log(htmlObject);

