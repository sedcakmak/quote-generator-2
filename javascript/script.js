function generateQuote() {
  let fullquotes = {
    "Snuff": "'Commander Vimes didn’t like the phrase “The innocent have nothing to fear,” believing the innocent had everything to fear, mostly from the guilty but in the longer term even more from those who say things like “The innocent have nothing to fear.”'",
    "Mort" : "'He’d been wrong, there was a light at the end of the tunnel, and it was a flamethrower.'",
    "Mort" : '“THAT’S MORTALS FOR YOU, Death continued. THEY’VE ONLY GOT A FEW YEARS IN THIS WORLD AND THEY SPEND THEM ALL IN MAKING THINGS COMPLICATED FOR THEMSELVES. FASCINATING.”',
    "Mort": '“I USHERED SOULS INTO THE NEXT WORLD. I WAS THE GRAVE OF ALL HOPE. I WAS THE ULTIMATE REALITY. I WAS THE ASSASSIN AGAINST WHOM NO LOCK WOULD HOLD.”~ “Yes, point taken, but do you have any particular skills?”',
    "Equal Rites" : "'...it is well known that a vital ingredient of success is not knowing that what you’re attempting can’t be done.'",
    "Equal Rites" : "'Granny Weatherwax was a witch. That was quite acceptable in the Ramtops, and no one had a bad word to say about witches. At least, not if he wanted to wake up in the morning the same shape as he went to bed.'",
    "Witches Abroad" : "'“You can‘t go around building a better world for people. Only people can build a better world for people. Otherwise it‘s just a cage.”'",
    "Witches Abroad" : "'Progress just means bad things happen faster.'",
    "The Color of Magic" : "'Tourist, Rincewind decided, meant idiot.'",
    "The Color of Magic": "'If complete and utter chaos was lightning, then he’d be the sort to stand on a hilltop in a thunderstorm wearing wet copper armour and shouting “All gods are bastards!”'",
    "The Color of Magic" : "'What he didn’t like about heroes was that they were usually suicidally gloomy when sober and homicidally insane when drunk.'",
    "The Light Fantastic" : "'The sun rose slowly, as if it wasn’t sure it was worth all the effort.'",
    "The Light Fantastic" : "'Of course I’m sane, when trees start talking to me, I don’t talk back.'",
    "Wyrd Sisters" : "'The Duke had a mind that ticked like a clock and, like a clock, it regularly went cuckoo.'",
    "Monstrous Regiment" : "'Do you think it’s possible for an entire nation to be insane?'",
    "Lords and Ladies" : "'Nanny Ogg looked under her bed in case there was a man there. Well, you never knew your luck.'",
    "The Hogfather" : "'Getting an education was a bit like a communicable sexual disease. It made you unsuitable for a lot of jobs and then you had the urge to pass it on.'",
    "Death's Domain": "“THERE ARE BETTER THINGS IN THE WORLD THAN ALCOHOL, ALBERT.” ~ “Oh, yes, sir. But alcohol sort of compensates for not getting them.”",
    "Unseen Academicals": "'Peace? Ah, yes, defined as the period of time to allow for preparation for the next war.'",
    "Jingo" : "'Give a man a fire and he’s warm for a day, but set fire to him and he’s warm for the rest of his life.'",
    "Jingo": "'Always be wary of any helpful item that weighs less than its operating manual.'",
    "Pyramids": "'Mere animals couldn’t possibly manage to act like this. You need to be a human being to be really stupid.'",
  }

   const images = [{
     id: 1,
     src: '../images/snuff.jpg',
     title: 'snuff',
   },
     {
       id: 2,
       src: '../images/mort.jpg',
       title: 'mort',
     },
     {
       id: 3,
       src: '../images/equalrites.jpg',
       title: 'equalrites',
     },
     {
       id: 4,
       src: '../images/witchesabroad.jpg',
       title: 'witchesabroad',
     },
     {
       id: 5,
       src: '../images/thecolourofmagic.jpg',
       title: 'thecolorofmagic',
     },
     {
       id: 6,
       src: '../images/thelightfantastic.jpg',
       title: 'thelightfantastic',
     },
     {
       id: 7,
       src: '../images/wyrdsisters.jpg',
       title: 'wyrdsisters',
     },
     {
       id: 8,
       src: '../images/monstrousregiment.jpg',
       title: 'monstrousregiment',
     },
     {
       id: 9,
       src: '../images/lordsandladies.jpg',
       title: 'lordsandladies',
     },
     {
       id: 10,
       src: '../images/hogfather.jpg',
       title: 'hogfather',
     },
     {
       id: 11,
       src: '../images/deathsdomain.jpg',
       title: 'deathsdomain',
     },
     {
       id: 12,
       src: '../images/unseenacademicals.jpg',
       title: 'unseenacademicals',
     },
     {
       id: 13,
       src: '../images/jingo.jpg',
       title: 'jingo',
     },
     {
       id: 14,
       src: '../images/pyramids.jpg',
       title: 'pyramids',
     },
   ]

  let quotes = Object.values(fullquotes);
  let quotebase = quotes[Math.floor(Math.random() * quotes.length)];
  let quote = quotebase.split('~').join('<br>');
  let book = Object.keys(fullquotes).find(key => fullquotes[key] === quotebase);
  setTimeout(function () {
  document.getElementById("quote").innerHTML = quote;
  let element = document.createElement('hr');
  document.getElementById("quote").appendChild(element);
  document.getElementById("book").innerHTML = book;

remove_img();
  if (book === "Snuff") {
    var img = document.createElement('img');
    img.src = images[0].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Mort") {
    var img = document.createElement('img');
    img.src = images[1].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Equal Rites") {
    var img = document.createElement('img');
    img.src = images[2].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Witches Abroad") {
    var img = document.createElement('img');
    img.src = images[3].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "The Color of Magic") {
    var img = document.createElement('img');
    img.src = images[4].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "The Light Fantastic") {
    var img = document.createElement('img');
    img.src = images[5].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Wyrd Sisters") {
    var img = document.createElement('img');
    img.src = images[6].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Monstrous Regiment") {
    var img = document.createElement('img');
    img.src = images[7].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Lords and Ladies") {
    var img = document.createElement('img');
    img.src = images[8].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "The Hogfather") {
    var img = document.createElement('img');
    img.src = images[9].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Death's Domain") {
    var img = document.createElement('img');
    img.src = images[10].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Unseen Academicals") {
    var img = document.createElement('img');
    img.src = images[11].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Jingo") {
    var img = document.createElement('img');
    img.src = images[12].src
    document.getElementById('covers').appendChild(img);
  } else if (book === "Pyramids") {
    var img = document.createElement('img');
    img.src = images[13].src
    document.getElementById('covers').appendChild(img);
  }

}, 500);
}
// document.getElementById("quote").style.transitionDelay = "2s";
// function add_img(x) {
  // NEW IMAGE 'a bi bak!
  // https://stackoverflow.com/questions/29640486/is-there-any-way-to-have-a-transition-effect-when-changing-the-innerhtml
  // BURADAKI KODA BI BAK, YUKARIDAKI IKI OBJEYI TEK OBJE YAPABILIRIM
//   var img = document.createElement('img');
//   img.src = images[x].src;
//   document.getElementById('covers').appendChild(img);
// }

function remove_img() {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  const covers = document.querySelector('#covers');
  removeAllChildNodes(covers);
}


  // function remove_img() {
  // var parent = document.getElementById('covers');
  // parent.innerHTML = '';
  // }
function changeButton() {
  var button = document.getElementById('mybutton');
 button.innerHTML = "Brighten my day up more!";
}

function mask() {
  let containerElement = document.getElementById('bg');
  // containerElement.setAttribute('class', 'mask');
  containerElement.style.filter = "sepia(100%)";
  containerElement.style.opacity = "0.5";
  document.getElementById('clockDisplay').style.fontWeight = "bold";
  document.getElementById('navbar').style.fontWeight = "bold";
  document.getElementById('contain').style.opacity = "1";
  document.getElementById('header').style.display = "none";
}


function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let session = "AM";

  let days = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];

  let dayName = days[date.getDay()];


  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;

  let time = dayName + " " + h + ":" + m + " " + session;
  document.getElementById("clockDisplay").innerText = time;
  document.getElementById("clockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
