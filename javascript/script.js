function generateQuote() {
  const fullquotes = [
    {
      book: "Snuff",
      quote:
        "'Commander Vimes didn’t like the phrase “The innocent have nothing to fear,” believing the innocent had everything to fear, mostly from the guilty but in the longer term even more from those who say things like “The innocent have nothing to fear.”'",
      image_src: "images/snuff.jpg",
    },
    {
      book: "Mort",
      quote:
        "'He’d been wrong, there was a light at the end of the tunnel, and it was a flamethrower.'",
      image_src: "images/mort.jpg",
    },
    {
      book: "Mort",
      quote:
        "“ᴛʜᴀᴛ's ᴍᴏʀᴛᴀʟs ғᴏʀ ʏᴏᴜ, Death continued. ᴛʜᴇʏ'ᴠᴇ ᴏɴʟʏ ɢᴏᴛ ᴀ ғᴇᴡ ʏᴇᴀʀs ɪɴ ᴛʜɪs ᴡᴏʀʟᴅ ᴀɴᴅ ᴛʜᴇʏ sᴘᴇɴᴅ ᴛʜᴇᴍ ᴀʟʟ ɪɴ ᴍᴀᴋɪɴɢ ᴛʜɪɴɢs ᴄᴏᴍᴘʟɪᴄᴀᴛᴇᴅ ғᴏʀ ᴛʜᴇᴍsᴇʟᴠᴇs. ғᴀsᴄɪɴᴀᴛɪɴɢ.”",
      image_src: "images/mort.jpg",
    },
    {
      book: "Mort",
      quote:
        "“ɪ ᴜsʜᴇʀᴇᴅ sᴏᴜʟs ɪɴᴛᴏ ɴᴇxᴛ ᴡᴏʀʟᴅ. ɪ ᴡᴀs ᴛʜᴇ ɢʀᴀᴠᴇ ᴏғ ᴀʟʟ ʜᴏᴘᴇ. ɪ ᴡᴀs ᴛʜᴇ ᴜʟᴛɪᴍᴀᴛᴇ ʀᴇᴀʟɪᴛʏ. ɪ ᴡᴀs ᴛʜᴇ ᴀssᴀssɪɴ ᴀɢᴀɪɴsᴛ ᴡʜᴏᴍ ɴᴏ ʟᴏᴄᴋ ᴡᴏᴜʟᴅ ʜᴏʟᴅ.”~ “Yes, point taken, but do you have any particular skills?”",
      image_src: "images/mort.jpg",
    },
    {
      book: "Equal Rites",
      quote:
        "'...it is well known that a vital ingredient of success is not knowing that what you’re attempting can’t be done.'",
      image_src: "images/equalrites.jpg",
    },
    {
      book: "Equal Rites",
      quote:
        "'Granny Weatherwax was a witch. That was quite acceptable in the Ramtops, and no one had a bad word to say about witches. At least, not if he wanted to wake up in the morning the same shape as he went to bed.'",
      image_src: "images/equalrites.jpg",
    },
    {
      book: "Witches Abroad",
      quote:
        "'You can‘t go around building a better world for people. Only people can build a better world for people. Otherwise it‘s just a cage.'",
      image_src: "images/witchesabroad.jpg",
    },
    {
      book: "Witches Abroad",
      quote: "'Progress just means bad things happen faster.'",
      image_src: "images/witchesabroad.jpg",
    },
    {
      book: "The Color of Magic",
      quote: "'Tourist, Rincewind decided, meant idiot.'",
      image_src: "images/thecolourofmagic.jpg",
    },
    {
      book: "The Color of Magic",
      quote:
        "'If complete and utter chaos was lightning, then he’d be the sort to stand on a hilltop in a thunderstorm wearing wet copper armour and shouting “All gods are bastards!”'",
      image_src: "images/thecolourofmagic.jpg",
    },
    {
      book: "The Color of Magic",
      quote:
        "'What he didn’t like about heroes was that they were usually suicidally gloomy when sober and homicidally insane when drunk.'",
      image_src: "images/thecolourofmagic.jpg",
    },
    {
      book: "The Light Fantastic",
      quote:
        "'The sun rose slowly, as if it wasn’t sure it was worth all the effort.'",
      image_src: "images/thelightfantastic.jpg",
    },
    {
      book: "The Light Fantastic",
      quote:
        "'Of course I’m sane, when trees start talking to me, I don’t talk back.'",
      image_src: "images/thelightfantastic.jpg",
    },
    {
      book: "Wyrd Sisters",
      quote:
        "'The Duke had a mind that ticked like a clock and, like a clock, it regularly went cuckoo.'",
      image_src: "images/wyrdsisters.jpg",
    },
    {
      book: "Monstrous Regiment",
      quote: "'Do you think it’s possible for an entire nation to be insane?'",
      image_src: "images/monstrousregiment.jpg",
    },
    {
      book: "Lords and Ladies",
      quote:
        "'Nanny Ogg looked under her bed in case there was a man there. Well, you never knew your luck.'",
      image_src: "images/lordsandladies.jpg",
    },
    {
      book: "The Hogfather",
      quote:
        "'Getting an education was a bit like a communicable sexual disease. It made you unsuitable for a lot of jobs and then you had the urge to pass it on.'",
      image_src: "images/hogfather.jpg",
    },
    {
      book: "Death's Domain",
      quote:
        "“ᴛʜᴇʀᴇ ᴀʀᴇ ʙᴇᴛᴛᴇʀ ᴛʜɪɴɢs ɪɴ ᴛʜᴇ ᴡᴏʀʟᴅ ᴛʜᴀɴ ᴀʟᴄᴏʜᴏʟ, ᴀʟʙᴇʀᴛ.” ~ “Oh, yes, sir. But alcohol sort of compensates for not getting them.”",
      image_src: "images/deathsdomain.jpg",
    },
    {
      book: "Unseen Academicals",
      quote:
        "'Peace? Ah, yes, defined as the period of time to allow for preparation for the next war.'",
      image_src: "images/unseenacademicals.jpg",
    },
    {
      book: "Jingo",
      quote:
        "'Give a man a fire and he’s warm for a day, but set fire to him and he’s warm for the rest of his life.'",
      image_src: "images/jingo.jpg",
    },
    {
      book: "Jingo",
      quote:
        "'Always be wary of any helpful item that weighs less than its operating manual.'",
      image_src: "images/jingo.jpg",
    },
    {
      book: "Pyramids",
      quote:
        "'Mere animals couldn’t possibly manage to act like this. You need to be a human being to be really stupid.'",
      image_src: "images/pyramids.jpg",
    },
  ]

  const random_index = Math.floor(Math.random() * fullquotes.length)
  const quotebase = fullquotes[random_index]
  const quote = quotebase.quote.split("~").join("<br>")

  document.getElementById("quote").innerHTML = quote
  let element = document.createElement("hr")
  document.getElementById("quote").appendChild(element)
  document.getElementById("book").innerHTML = quotebase.book
  remove_img()
  let img = document.createElement("img")
  img.src = quotebase.image_src
  document.getElementById("covers").appendChild(img)
}

function remove_img() {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }
  const covers = document.querySelector("#covers")
  removeAllChildNodes(covers)
}

function mask() {
  const containerElement = document.getElementById("bg")
  containerElement.style.filter = "sepia(100%)"
  containerElement.style.opacity = "0.5"
  containerElement.style.transform = "rotateY(180deg)"

  document.getElementById("contain").style.opacity = "1"
  const button = document.getElementById("firstbutton")
  button.style.display = "none"
  button.style.opacity = "0"
  document.getElementById("clockDisplay").setAttribute("class", "reload")

  setTimeout(() => {
    document.getElementById("secondbutton").style.display = "inline"
    document.getElementById("secondbutton").style.opacity = "1"
    document.querySelector(".link-reload").innerHTML =
      "Back to Original Discworld"
    document.querySelector(".link-reload").setAttribute("class", "reload")
  }, 2500)
}

function showTime() {
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let session = "AM"

  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  let dayName = days[date.getDay()]

  if (h == 0) {
    h = 12
  }

  if (h > 12) {
    h = h - 12
    session = "PM"
  }

  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m

  let time = dayName + " " + h + ":" + m + " " + session
  document.getElementById("clockDisplay").innerText = time
  document.getElementById("clockDisplay").textContent = time

  setTimeout(showTime, 1000)
}

showTime()
