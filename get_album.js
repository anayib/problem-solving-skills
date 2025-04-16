function releaseYear(album) {
	const albums = {
    "2015": ["Vulnicura", "Honeymoon", "Rebel Heart"],
    "2016": ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
    "2017": ["Flower Boy", "Antisocialites"],
    "2018": ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
    "2019": ["thank u next", "Magdalene", "Ode to Joy"],
    "2020": ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"]
  }
	for (const year in albums) {
		if (albums[year].indexOf(album) !== -1) { 
			 return parseInt(year)
	  }
	}
	return "Unknown"
}

console.log(releaseYear("Honeymoon")) // 2015
console.log(releaseYear("folklore")) // 2020
console.log(releaseYear("Unknown")) // Unknown


/*
 solution 2

function releaseYear(album) {
	const albums = {
    "2015": ["Vulnicura", "Honeymoon", "Rebel Heart"],
    "2016": ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
    "2017": ["Flower Boy", "Antisocialites"],
    "2018": ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
    "2019": ["thank u next", "Magdalene", "Ode to Joy"],
    "2020": ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"]
  }

  // Create a reverse mapping of albums to their release years
  const albumYearMap = {};
  for (const year in albums) {
    albums[year].forEach(albumName => {
      albumYearMap[albumName] = parseInt(year);
    });
  }

  // Return the year or "Unknown"
  return albumYearMap[album] || "Unknown";
}




PACER:

Problem: return the right year of the album realeased passed as an argument. 
Input: String representing the album name
Output: Number representing the year of the album

Algorithm:
- Iterate over the albums object
- Check if the album is in the object by using the indexOf method over the array of albums for the current year
- If it is, return the year
- If it isn't, return "Unknown"


Album in Albumns
You have an object with years 2015-2020 as keys and some albums released for each year as key values. Write a function that takes an album and returns the year in which it was released.

Examples
releaseYear("Ode to Joy") ➞ 2019

releaseYear("Honeymoon") ➞ 2015

releaseYear("Fake_album") ➞ "Unknown"
Note
Albums object is made for you.
If the album isn't in the object, return the string "Unknown".



*/