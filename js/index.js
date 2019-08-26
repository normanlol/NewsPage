if (!localStorage.getItem("c")) {localStorage.setItem('c', 'us')}
apply()
getNews() 

function getNews() {
	document.getElementById("deets").innerHTML = "Getting the top stories..."
	const Http = new XMLHttpRequest();
    const url = 'https://newsapi.org/v2/top-headlines?country=' + localStorage.getItem('c') + '&apiKey=af3de0ad8360434493a8cad8564cdf7f';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
		var json = JSON.parse(Http.responseText)
		if (!json.status === "OK") {document.getElementById("news").innerHTML = "[error!]"}
		var articleTitle = json.articles[0].title;
		var articleSrc = json.articles[0].source.name;
		var articleURL = json.articles[0].url;
		var articleAuth = json.articles[0].author;
		var articleDesc = json.articles[0].description;
		var articleImg = json.articles[0].urlToImage;
		document.getElementById("tsImage").src = articleImg;
		document.getElementById("tsTitle").innerHTML = articleTitle;
		document.getElementById("tsTitle").title = "Author: " + articleAuth;
		if (articleAuth === null) {document.getElementById("tsTitle").title = ""}
		document.getElementById("tsDesc").innerHTML = "<b>" + articleSrc + "</b>: " + articleDesc;
		document.getElementById("tsRM").href = articleURL;
		document.getElementById("loading").style.display = "none";
	}
}

function apply() {
	document.getElementById('country').value = localStorage.getItem('c')
}

function saveSettings() {
	localStorage.setItem('c', document.getElementById('country').value)
	location.reload();
}