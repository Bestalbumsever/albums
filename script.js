//REROLLS
//edie half of them
//ry gang starr to binary star
//jurak soad to beergarden
//jj yellowcard to DWTD
//alfie buster b and thom bresh and put on Idiot Pilot - Strange we should meet here instead
//noora skipped swapportunity to keep death stars on the list


var arrAlbums = [];
var globRockCount = 0;
var globPopCount = 0;
var globupperCount = 0;
var globdownerCount = 0;
var globMetalCount = 0;
var globRapCount = 0;
var globHardRockCount = 0;
var globPunkCount = 0;
var globOSTCount = 0;
var globIndieCount = 0;
var globTool = false;
var globHint = "everything";

$( document ).ready(function() {

try {
var json_str = getCookie('albums');
arrAlbums = JSON.parse(json_str);
}catch(ex) {
console.log("failed to get album cookie: " + ex.toString());
}
    
loadCheckedAlbums();



	$(document).find('td').each (function() {
    $(this).on("click", function(){  
	   toggleAlbum($(this).attr("id"))
    });
});
	
});	


function toggleAlbum(ID) {

 if (arrAlbums.includes(ID) ) { //uncheck
 
 if (ID == "H2") { globTool = false; }
 
  for( var i = 0; i < arrAlbums.length; i++){     
        if ( arrAlbums[i] === ID) {     
            arrAlbums.splice(i, 1); 
			document.getElementById(ID).style.border = "2px solid black"	
			document.getElementById(ID).childNodes[0].classList.remove("listened");			
        }    
    }
	
if (document.getElementById(ID).classList.contains("rock")) {
globRockCount -= 1;
} else if (document.getElementById(ID).classList.contains("pop")) {
globPopCount -= 1;
} else if (document.getElementById(ID).classList.contains("metal")) {
globMetalCount -= 1;
} else if (document.getElementById(ID).classList.contains("upper")) {
globupperCount -= 1;
}else if (document.getElementById(ID).classList.contains("rap")) {
globRapCount -= 1;
}else if (document.getElementById(ID).classList.contains("hardrock")) {
globHardRockCount -= 1;
}else if (document.getElementById(ID).classList.contains("punk")) {
globPunkCount -= 1;
}else if (document.getElementById(ID).classList.contains("downer")) {
globdownerCount -= 1;
}else if (document.getElementById(ID).classList.contains("ost")) {
globOSTCount -= 1;
}else if (document.getElementById(ID).classList.contains("indie")) {
globIndieCount -= 1;
}

 
 } else { // check
 
  if (ID == "H2") { globTool = true; }
 
 arrAlbums.push(ID);
 document.getElementById(ID).style.border = "2px solid lightgreen"
 document.getElementById(ID).childNodes[0].classList.add("listened");
 
if (document.getElementById(ID).classList.contains("rock")) {
globRockCount += 1;
} else if (document.getElementById(ID).classList.contains("pop")) {
globPopCount += 1;
} else if (document.getElementById(ID).classList.contains("metal")) {
globMetalCount += 1;
} else if (document.getElementById(ID).classList.contains("upper")) {
globupperCount += 1;
}else if (document.getElementById(ID).classList.contains("rap")) {
globRapCount += 1;
}else if (document.getElementById(ID).classList.contains("hardrock")) {
globHardRockCount += 1;
}else if (document.getElementById(ID).classList.contains("punk")) {
globPunkCount += 1;
}else if (document.getElementById(ID).classList.contains("downer")) {
globdownerCount += 1;
}else if (document.getElementById(ID).classList.contains("ost")) {
globOSTCount += 1;
}else if (document.getElementById(ID).classList.contains("indie")) {
globIndieCount += 1;
}
 
 }
 
updateAlbumCount();

}

function loadCheckedAlbums() {

for( var i = 0; i < arrAlbums.length; i++){    
document.getElementById(arrAlbums[i]).style.border = "2px solid lightgreen" 
document.getElementById(arrAlbums[i]).childNodes[0].classList.add("listened");

if (arrAlbums[i] == "H2") {
globTool = true;
}

if (document.getElementById(arrAlbums[i]).classList.contains("rock")) {
globRockCount += 1;
} else if (document.getElementById(arrAlbums[i]).classList.contains("pop")) {
globPopCount += 1;
} else if (document.getElementById(arrAlbums[i]).classList.contains("upper")) {
globupperCount += 1;
} else if (document.getElementById(arrAlbums[i]).classList.contains("metal")) {
globMetalCount += 1;
} else if (document.getElementById(arrAlbums[i]).classList.contains("rap")) {
globRapCount += 1;
}else if (document.getElementById(arrAlbums[i]).classList.contains("hardrock")) {
globHardRockCount += 1;
}else if (document.getElementById(arrAlbums[i]).classList.contains("punk")) {
globPunkCount += 1;
}else if (document.getElementById(arrAlbums[i]).classList.contains("downer")) {
globdownerCount += 1;
}else if (document.getElementById(arrAlbums[i]).classList.contains("ost")) {
globOSTCount += 1;
}else if (document.getElementById(arrAlbums[i]).classList.contains("indie")) {
globIndieCount += 1;
}

updateAlbumCount();

}

}

function updateAlbumCount() {

var json_str = JSON.stringify(arrAlbums);
createCookie('albums', json_str);
var percent = (100 * arrAlbums.length) / 224;
percent = percent.toFixed(2);

if (percent > 9.99) { document.getElementById("spoon").style.visibility = "" } else { document.getElementById("spoon").style.visibility = "hidden" };
if (percent > 24.99) { document.getElementById("bronze").style.visibility = "" } else { document.getElementById("bronze").style.visibility = "hidden" };
if (percent > 49.99) { document.getElementById("silver").style.visibility = "" } else { document.getElementById("silver").style.visibility = "hidden" };
if (percent > 74.99) { document.getElementById("gold").style.visibility = "" } else { document.getElementById("gold").style.visibility = "hidden" };
if (arrAlbums.length > 68) { document.getElementById("nice").style.visibility = "" } else { document.getElementById("nice").style.visibility = "hidden" };
if (globTool == true ) { document.getElementById("sudafed").style.visibility = "" } else { document.getElementById("sudafed").style.visibility = "hidden" };
if (globRockCount > 24) { document.getElementById("rock").style.visibility = "" } else { document.getElementById("rock").style.visibility = "hidden" };
if (globupperCount > 14) { document.getElementById("upper").style.visibility = "" } else { document.getElementById("upper").style.visibility = "hidden" };
if (globdownerCount > 9) { document.getElementById("downer").style.visibility = "" } else { document.getElementById("downer").style.visibility = "hidden" };
if (globMetalCount > 24) { document.getElementById("metal").style.visibility = "" } else { document.getElementById("metal").style.visibility = "hidden" };
if (globPopCount > 3) { document.getElementById("pop").style.visibility = "" } else { document.getElementById("pop").style.visibility = "hidden" };
if (globRapCount > 24) { document.getElementById("rap").style.visibility = "" } else { document.getElementById("rap").style.visibility = "hidden" };
if (globHardRockCount > 9) { document.getElementById("hardrock").style.visibility = "" } else { document.getElementById("hardrock").style.visibility = "hidden" };
if (globPunkCount > 9) { document.getElementById("punk").style.visibility = "" } else { document.getElementById("punk").style.visibility = "hidden" };
if (globOSTCount > 2) { document.getElementById("ost").style.visibility = "" } else { document.getElementById("ost").style.visibility = "hidden" };
if (globIndieCount > 19) { document.getElementById("indie").style.visibility = "" } else { document.getElementById("indie").style.visibility = "hidden" };
if (arrAlbums.includes("H1") && arrAlbums.includes("H2") && arrAlbums.includes("H3") && arrAlbums.includes("I2") && arrAlbums.includes("I1") && arrAlbums.includes("A3") && arrAlbums.includes("J1") && arrAlbums.includes("B1") && arrAlbums.includes("G3")) {
document.getElementById("god").style.visibility = ""
} else {
document.getElementById("god").style.visibility = "hidden"
}

$("#pListenCount").text("You have listened to " + arrAlbums.length + "/224 albums! (" + percent + "%)");

if (arrAlbums.length == 69) {
document.getElementById("divNice").style.display = "inline";
} else {
document.getElementById("divNice").style.display = "none";
}

if (arrAlbums.length == 224) {
document.getElementById("solitaire").style.visibility = "";
}

}

function reveal(strData) {

document.getElementById("hInfo").innerText = strData;

}

function random(unlistened) {

	var imgs = document.getElementsByTagName("img");	
    var imgSrcs = [];
    for (var i = 0; i < imgs.length; i++) {
	if (!imgs[i].classList.contains("award") && !imgs[i].classList.contains("meme")) {
		var boolOK = true;
		try{
			var genre = imgs[i].parentNode.classList;
			var btn = document.getElementById("btn" + genre);		
			if (btn.style.color == "red") { boolOK = false; }
		}catch(ex) {
			console.log("genre filter random bug: " + ex.toString());
		}	
		if (boolOK == true) {
			
			if (unlistened == true) {
				if (imgs[i].classList.contains("listened")) {				
				} else {
					imgSrcs.push(imgs[i].alt);
				}
			} else {
				imgSrcs.push(imgs[i].alt);
			}    
			}	
			}			
    }
    
	if (imgSrcs.length == 0) {
		document.getElementById("pRandom").innerText = "You should go outside now!";
	} else {
		document.getElementById("pRandom").innerText = "You should listen to " + random_item(imgSrcs) + "!";
	}	
}

function random_item(items)
{  
return items[Math.floor(Math.random()*items.length)];     
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function filter(genre) {
switch(genre) {
  case "all":
    var tds = document.getElementsByTagName("td");
	for (var i = 0; i < tds.length; i++) {
	if (!tds[i].classList.contains("guide")) {
	 tds[i].style.visibility = "";
	 }
    }
	var btns = document.getElementsByTagName("button");
	for (var i = 0; i < btns.length; i++) {
	 btns[i].style.color = "white";
    }
    break;
case "none":	
    var tds = document.getElementsByTagName("td");
	for (var i = 0; i < tds.length; i++) {
	if (!tds[i].classList.contains("guide")) {
		 tds[i].style.visibility = "hidden";
	}
    }
		var btns = document.getElementsByClassName("genrebtn");
	for (var i = 0; i < btns.length; i++) {
	 btns[i].style.color = "red";
    }
    break;
 default:
	
	var btn = document.getElementById("btn" + genre);
	if (btn.style.color == "white") {
	btn.style.color = "red";
	} else {
	btn.style.color = "white";
	}
    var tds = document.getElementsByClassName(genre);
	for (var i = 0; i < tds.length; i++) {
	if (!tds[i].classList.contains("guide")) {
	if (tds[i].style.visibility == "hidden") {
	tds[i].style.visibility = "";
	} else {
	tds[i].style.visibility = "hidden";
	}	
	}	
    }      
}
}

function genreCount(genre) {

switch(genre) {
	case "rock":	
	$("#hInfo").text(globRockCount + "/40 (" + ((100 * globRockCount) / 39).toFixed(2) + "%)");
    break;
	case "metal":
	$("#hInfo").text(globMetalCount + "/37 (" + ((100 * globMetalCount) / 37).toFixed(2) + "%)");
    break;
	case "upper":
	$("#hInfo").text(globupperCount + "/19 (" + ((100 * globupperCount) / 19).toFixed(2) + "%)");
    break;
	case "pop":
	$("#hInfo").text(globPopCount + "/4 (" + ((100 * globPopCount) / 4).toFixed(2) + "%)");
    break;
	case "rap":
	$("#hInfo").text(globRapCount + "/45 (" + ((100 * globRapCount) / 45).toFixed(2) + "%)");
    break;
	case "hardrock":
	$("#hInfo").text(globHardRockCount + "/12 (" + ((100 * globHardRockCount) / 12).toFixed(2) + "%)");
    break;
	case "punk":
	$("#hInfo").text(globPunkCount + "/15 (" + ((100 * globPunkCount) / 15).toFixed(2) + "%)");
    break;
	case "downer":
	$("#hInfo").text(globdownerCount + "/14 (" + ((100 * globdownerCount) / 14).toFixed(2) + "%)");
    break;
	case "ost":
	$("#hInfo").text(globOSTCount + "/6 (" + ((100 * globOSTCount) / 6).toFixed(2) + "%)");
    break;
	case "indie":
	$("#hInfo").text(globIndieCount + "/27 (" + ((100 * globIndieCount) / 27).toFixed(2) + "%)");
    break;	
}
}

function highlight(txt) {
txt = txt.substring(0, txt.length - 1);
alb = txt.split("You should listen to ")[1]
var allImages = document.getElementsByTagName("img");
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].alt == alb) {		
            allImages[i].style.transform = 'rotate(' + 180 + 'deg)';
        }
    }
}

function unhighlight(txt) {
txt = txt.substring(0, txt.length - 1);
alb = txt.split("You should listen to ")[1]
var allImages = document.getElementsByTagName("img");
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].alt == alb) {		
            allImages[i].style.transform = 'rotate(' + 0 + 'deg)';
        }
    }
}

function showAward(award) {
switch(award) {
case "spoon":
	$("#pAward").text("Spoon: listened to 10% of all albums");
    break;
  case "bronze":
	$("#pAward").text("Bronze: listened to 25% of all albums");
    break;
	case "silver":
	$("#pAward").text("Silver: listened to 50% of all albums");
    break;
	case "gold":
	$("#pAward").text("Gold: listened to 75% of all albums");
    break;
	case "rock":
	$("#pAward").text("Solid: listened to 25 rock albums");
    break;
	case "metal":
	$("#pAward").text("Through The Fire: listened to 25 metal albums");
    break;
	case "upper":
	$("#pAward").text("Ecstasy: listened to 15 upper electronic albums");
    break;
	case "pop":
	$("#pAward").text("Technicolour Dream: listened to all 4 pop albums");
    break;
	case "sudafed":
	$("#pAward").text("Cough Medicine: listened to the developer's favourite album");
    break;
	case "rap":
	$("#pAward").text("The Chronic: listened to 25 hip-hop/rnb albums");
    break;
	case "hardrock":
	$("#pAward").text("Diamond Hands: listened to 10 hard rock albums");
    break;
	case "punk":
	$("#pAward").text("Not Dead: listened to 10 punk/ska albums");
    break;
	case "downer":
	$("#pAward").text("Ambien: listened to 10 downer electronic albums");
    break;
	case "ost":
	$("#pAward").text("Long Long Man: listened to 3 soundtracks");
    break;
	case "indie":
	$("#pAward").text("Snowflake: listened to 20 indie/alternative albums");
    break;
	case "nice":
	$("#pAward").text("Nice: listened to 69 albums");
    break;
	case "god":
	$("#pAward").text("Teacher's Pet: listened to the developer's 3x3");
    break;
}
}

function clippy() {
if (document.getElementById("clippy").style.visibility == "hidden") {
document.getElementById("clippy").style.visibility = ""
document.getElementById("hint").style.visibility = ""
if (globRockCount > 16 && globRockCount < 20) { globHint = "rock" } else 
if (globupperCount > 7 && globupperCount < 10) { globHint = "upper electronic" }else 
if (globdownerCount > 5 && globdownerCount < 8) { globHint = "downer electronic" }else 
if (globMetalCount > 21 && globMetalCount < 25) { globHint = "metal" }else 
if (globPopCount == 4) { globHint = "pop" }else 
if (globRapCount > 21 && globRapCount < 25) { globHint = "rap/rnb" }else 
if (globHardRockCount > 6 && globHardRockCount < 9) { globHint = "hard rock" }else 
if (globPunkCount > 7 && globPunkCount < 10) { globHint = "punk/ska" }else 
if (globIndieCount > 9 && globIndieCount < 12) { globHint = "indie/alternative" }else 
{globHint == "everything"}
$('#hint').text("Want an achievement? You should listen to more " + globHint + "!");
} else {
document.getElementById("clippy").style.visibility = "hidden"
document.getElementById("hint").style.visibility = "hidden"
}
}

function backup(func) {
 if (func == "save") {
   var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value =  JSON.stringify(arrAlbums);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
	$("#hInfo").text("Album cookie copied to clipboard");
 } else {
 var albs = prompt("Paste your cookie value", "");
 if (albs != null) {
  arrAlbums = JSON.parse(albs);
  loadCheckedAlbums();
}
 }
}

function hideAward() {
$("#pAward").html("&nbsp;");
}

function funcAll() {
 var allImages = document.getElementsByTagName("img");
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
       // if (allImages[i].alt == alt) {
           // images.push(allImages[i]);
       // }
	   console.log(allImages[i].alt)
    }

}