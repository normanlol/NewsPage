if (!localStorage.getItem("c")) {localStorage.setItem('c', 'us')}
apply();
getNews();

var s = document.getElementById("search");
s.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
		search();
	} 
});

setInterval(function() {
	getNews();
}, 5 * 60 * 1000);
 

function getNews() {
	document.getElementById("loading").style.display = 'block';
	document.getElementById("loading1").style.display = 'block';
	document.getElementById("loading2").style.display = 'block';
	document.getElementById("loading3").style.display = 'block';
	document.getElementById("deets").innerHTML = "Please wait..."
	const Http = new XMLHttpRequest();
    const url = 'https://newsapi.org/v2/top-headlines?country=' + localStorage.getItem('c') + '&apiKey=af3de0ad8360434493a8cad8564cdf7f';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
		var json = JSON.parse(Http.responseText)
		document.getElementById("deets").innerHTML = "Getting data..."
		if (status === "error") {
			if (json.message === "apiKeyExhausted") {requestAPIKey();}
			if (json.message === "rateLimited") {requestAPIKey();}
		}
		var articleTitle = json.articles[0].title;
		var articleSrc = json.articles[0].source.name;
		var articleURL = json.articles[0].url;
		var articleAuth = json.articles[0].author;
		var articleDesc = json.articles[0].description;
		var articleImg = json.articles[0].urlToImage;
		var articleTitle1 = json.articles[1].title;
		var articleSrc1= json.articles[1].source.name;
		var articleURL1 = json.articles[1].url;
		var articleAuth1 = json.articles[1].author;
		var articleDesc1 = json.articles[1].description;
		var articleImg1 = json.articles[1].urlToImage;
		var articleTitle2 = json.articles[2].title;
		var articleSrc2= json.articles[2].source.name;
		var articleURL2 = json.articles[2].url;
		var articleAuth2 = json.articles[2].author;
		var articleDesc2 = json.articles[2].description;
		var articleImg2 = json.articles[2].urlToImage;
		var articleTitle3 = json.articles[3].title;
		var articleSrc3 = json.articles[3].source.name;
		var articleURL3 = json.articles[3].url;
		var articleAuth3 = json.articles[3].author;
		var articleDesc3 = json.articles[3].description;
		var articleImg3 = json.articles[3].urlToImage;
		var articleTitle4 = json.articles[4].title;
		var articleSrc4 = json.articles[4].source.name;
		var articleURL4 = json.articles[4].url;
		var articleAuth4 = json.articles[4].author;
		var articleDesc4 = json.articles[4].description;
		var articleImg4 = json.articles[4].urlToImage;
		var articleTitle5 = json.articles[5].title;
		var articleSrc5 = json.articles[5].source.name;
		var articleURL5 = json.articles[5].url;
		var articleAuth5 = json.articles[5].author;
		var articleDesc5 = json.articles[5].description;
		var articleImg5 = json.articles[5].urlToImage;
		document.getElementById("deets").innerHTML = "Writing data to HTML..."
		document.getElementById("tsImage").src = articleImg;
		document.getElementById("tsTitle").innerHTML = articleTitle;
		document.getElementById("tsTitle").title = "Author: " + articleAuth;
		document.getElementById("tsDesc").innerHTML = "<b>" + articleSrc + "</b>: " + articleDesc;
		document.getElementById("tsRM").href = articleURL;
		document.getElementById("loading").style.display = "none";
		document.getElementById("n1Image").src = articleImg1;
		document.getElementById("n1Title").innerHTML = articleTitle1;
		document.getElementById("n1Title").title = "Author: " + articleAuth1;
		document.getElementById("n1Desc").innerHTML = "<b>" + articleSrc1 + "</b>: " + articleDesc1;
		document.getElementById("n1RM").href = articleURL1;
		document.getElementById("loading1").style.display = "none";
		document.getElementById("n2Image").src = articleImg2;
		document.getElementById("n2Title").innerHTML = articleTitle2;
		document.getElementById("n2Title").title = "Author: " + articleAuth2;
		document.getElementById("n2Desc").innerHTML = "<b>" + articleSrc2 + "</b>: " + articleDesc2;
		document.getElementById("n2RM").href = articleURL2;
		document.getElementById("loading2").style.display = "none";
		document.getElementById("n3Image").src = articleImg3;
		document.getElementById("n3Title").innerHTML = articleTitle3;
		document.getElementById("n3Title").title = "Author: " + articleAuth3;
		document.getElementById("n3Desc").innerHTML = "<b>" + articleSrc3 + "</b>: " + articleDesc3;
		document.getElementById("n3RM").href = articleURL3;
		document.getElementById("loading3").style.display = "none";
		document.getElementById("n4Title").innerHTML = articleTitle4;
		document.getElementById("n4Title").title = "Author: " + articleAuth4;
		document.getElementById("n4Desc").innerHTML = "<b>" + articleSrc4 + "</b>: " + articleDesc4;
		document.getElementById("n4Image").src = articleImg4;
		document.getElementById("n4RM").href = articleURL4;
		document.getElementById("loading4").style.display = "none";
		document.getElementById("n5Title").innerHTML = articleTitle5;
		document.getElementById("n5Title").title = "Author: " + articleAuth5;
		document.getElementById("n5Desc").innerHTML = "<b>" + articleSrc5 + "</b>: " + articleDesc5;
		document.getElementById("n5Image").src = articleImg5;
		document.getElementById("n5RM").href = articleURL5;
		document.getElementById("loading5").style.display = "none";
		document.getElementById("deets").innerHTML = "Checking for null data..."
		if (articleAuth === null) {document.getElementById("tsTitle").title = ""}
		if (articleAuth1 === null) {document.getElementById("n1Title").title = ""}
		if (articleAuth2 === null) {document.getElementById("n2Title").title = ""}
		if (articleAuth3 === null) {document.getElementById("n3Title").title = ""}
		if (articleAuth4 === null) {document.getElementById("n4Title").title = ""}
		if (articleAuth5 === null) {document.getElementById("n5Title").title = ""}
		if (articleDesc === null) {document.getElementById("tsDesc").innerHTML = "<b>" + articleSrc + "</b>: No description avaliable."}
		if (articleDesc1 === null) {document.getElementById("n1Desc").innerHTML = "<b>" + articleSrc1 + "</b>: No description avaliable."}
		if (articleDesc2 === null) {document.getElementById("n2Desc").innerHTML = "<b>" + articleSrc2 + "</b>: No description avaliable."}
		if (articleDesc3 === null) {document.getElementById("n3Desc").innerHTML = "<b>" + articleSrc3 + "</b>: No description avaliable."}
		if (articleDesc4 === null) {document.getElementById("n4Desc").innerHTML = "<b>" + articleSrc4 + "</b>: No description avaliable."}
		if (articleDesc5 === null) {document.getElementById("n4Desc").innerHTML = "<b>" + articleSrc5 + "</b>: No description avaliable."}
		if (articleImg === null) {document.getElementById("tsImage").src = "img/noimg.jpg"}
		if (articleImg === "") {document.getElementById("tsImage").src = "img/noimg.jpg"}
		if (articleImg1 === null) {document.getElementById("n1Image").src = "img/noimg.jpg"}
		if (articleImg1 === "") {document.getElementById("n1Image").src = "img/noimg.jpg"}
		if (articleImg2 === null) {document.getElementById("n2Image").src = "img/noimg.jpg"}
		if (articleImg2 === "") {document.getElementById("n2Image").src = "img/noimg.jpg"}
		if (articleImg3 === null) {document.getElementById("n3Image").src = "img/noimg.jpg"}
		if (articleImg3 === "") {document.getElementById("n3Image").src = "img/noimg.jpg"}
		if (articleImg4 === null) {document.getElementById("n4Image").src = "img/noimg.jpg"}
		if (articleImg4 === "") {document.getElementById("n4Image").src = "img/noimg.jpg"}
		if (articleImg5 === null) {document.getElementById("n5Image").src = "img/noimg.jpg"}
		if (articleImg5 === "") {document.getElementById("n5Image").src = "img/noimg.jpg"}
		if (articleSrc === "Youtube.com") {
			document.getElementById("tsVid").innerHTML = '<iframe width="1" height="315" src="https://www.youtube-nocookie.com/embed/' + articleURL.substring(32, 43) + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
		if (articleSrc1 === "Youtube.com") {
			document.getElementById("n1Vid").innerHTML = '<iframe width="1" height="315" src="https://www.youtube-nocookie.com/embed/' + articleURL1.substring(32, 43) + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
		if (articleSrc2 === "Youtube.com") {
			document.getElementById("n2Vid").innerHTML = '<iframe width="1" height="315" src="https://www.youtube-nocookie.com/embed/' + articleURL2.substring(32, 43) + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
		if (articleSrc3 === "Youtube.com") {
			document.getElementById("n3Vid").innerHTML = '<iframe width="1" height="315" src="https://www.youtube-nocookie.com/embed/' + articleURL3.substring(32, 43) + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
		if (articleSrc4 === "Youtube.com") {
			document.getElementById("n4Vid").innerHTML = '<iframe width="1" height="315" src="https://www.youtube-nocookie.com/embed/' + articleURL4.substring(32, 43) + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
		if (articleSrc5 === "Youtube.com") {
			document.getElementById("n5Vid").innerHTML = '<iframe width="1" height="315" src="https://www.youtube-nocookie.com/embed/' + articleURL5.substring(32, 43) + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
 	}
}

function apply() {
	document.getElementById('country').value = localStorage.getItem('c')
	document.getElementById('theme').value = localStorage.getItem('npTheme')
}

function saveSettings() {
	localStorage.setItem('c', document.getElementById("country").value);
	localStorage.setItem('npTheme', document.getElementById("npTheme").value);
	location.reload();
}

function search() {
	var q = encodeURIComponent(document.getElementById("search").value);
	document.getElementById("search").diasbled = true;
	if (window.location.href.match("https://")) {window.open("https://n0rmancodes.github.io/NewsPage/search?q=" + q, "_self")}
	if (window.location.href.match("file://")) {window.open("file:///C:/Users/norma/Documents/GitHub/NewsPage/search/index.html?q=" +q, "_self")}
}

function requestAPIKey() {
	window.open("reqAPI", "_self")
}