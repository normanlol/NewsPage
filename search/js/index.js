if (!localStorage.getItem("c")) {localStorage.setItem('c', 'us')}
checkURL();
document.getElementById("loading").style.display = "block";

var s = document.getElementById("search");
s.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
		search();
	} 
});

function checkURL() {
	if (window.location.href.match("https://")) {var q = window.location.href.substring(49, 999)}
	if (window.location.href.match("file://")) {var q = window.location.href.substring(70, 999)}
	document.getElementById("search").value = decodeURIComponent(q);
	document.getElementById("deets").innerHTML = "Searching NewsAPI's database..."
	const Http = new XMLHttpRequest();
    const url = 'https://newsapi.org/v2/everything?q=' + encodeURIComponent(q) + '&sortBy=popularity&apiKey=af3de0ad8360434493a8cad8564cdf7f';
	Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
		var json = JSON.parse(Http.responseText)
		document.getElementById("deets").innerHTML = "Getting data...";
		if (status === "error") {
			if (json.message === "apiKeyExhausted") {requestAPIKey();}
			if (json.message === "rateLimited") {requestAPIKey();}
		}
		if (json.totalResults === 0) {
			noResults();
		} else {
			var articleTitle = json.articles[0].title;
			var articleSrc = json.articles[0].source.name;
			var articleURL = json.articles[0].url;
			var articleAuth = json.articles[0].author;
			var articleDesc = json.articles[0].description;
			var articleImg = json.articles[0].urlToImage;
			var articleTitle1 = json.articles[1].title;
			var articleSrc1 = json.articles[1].source.name;
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
			document.getElementById("deets").innerHTML = "Writing data to HTML...";
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
			document.getElementById("n2Image").src = articleImg2;
			document.getElementById("n2Title").innerHTML = articleTitle2;
			document.getElementById("n2Title").title = "Author: " + articleAuth2;
			document.getElementById("n2Desc").innerHTML = "<b>" + articleSrc2 + "</b>: " + articleDesc2;
			document.getElementById("n2RM").href = articleURL2;
			document.getElementById("deets").innerHTML = "Checking for null values...";
			if (articleAuth === null) {document.getElementById("tsTitle").title = ""}
			if (articleDesc === null) {document.getElementById("tsDesc").innerHTML = "<b>" + articleSrc + "</b>: No description avaliable."}
			if (articleImg === null) {document.getElementById("tsImg").src = "img/noimg.jpg"}
			if (articleImg === "") {document.getElementById("tsImage").src = "img/noimg.jpg"}
			if (articleAuth1 === null) {document.getElementById("n1Title").title = ""}
			if (articleDesc1 === null) {document.getElementById("n1Desc").innerHTML = "<b>" + articleSrc + "</b>: No description avaliable."}
			if (articleImg1 === null) {document.getElementById("n1Img").src = "img/noimg.jpg"}
			if (articleImg1 === "") {document.getElementById("n1Image").src = "img/noimg.jpg"}
			if (articleAuth2 === null) {document.getElementById("n2Title").title = ""}
			if (articleDesc2 === null) {document.getElementById("n2Desc").innerHTML = "<b>" + articleSrc + "</b>: No description avaliable."}
			if (articleImg2 === null) {document.getElementById("n2Img").src = "img/noimg.jpg"}
			if (articleImg2 === "") {document.getElementById("n2Image").src = "img/noimg.jpg"}
			document.getElementById("tR").style.display = "block";
		}
	}
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

function noResults() {
	document.getElementById("results").style.display = 'none';
	document.getElementById("noResults").style.display = 'block';
}