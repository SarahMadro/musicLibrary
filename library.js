var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (playlist) {
  for(var pId in playlist) {

    console.log('Q: 1', `${pId}: ${playlist[pId].name} - ${playlist[pId].tracks.length} tracks`);
  }
};

printPlaylists(library.playlists)

//2***************************************/

// // prints a list of all tracks, in the form:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (track) {

  for(var tId in track) {
    // console.log(track[tId]);
    console.log('Q: 2', `${tId}: ${track[tId].name}, ${track[tId].artist} (${track[tId].album})`);
  }

}

printTracks(library.tracks)
// 3***********************************

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  let playlist = library.playlists[playlistId];
  let pName = playlist.name;
  let trackIds = playlist.tracks;
  let res = '';

  res += `${playlistId}: ${pName} - ${trackIds.length}\n`;

  trackIds.forEach(function(tId){
    let track = library.tracks[tId];
    res += `${tId}: ${track.name} by ${track.artist} (${track.album})\n`;
  })
  return res;
}

console.log(printPlaylist('p01'));


//4************************************

//adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

    var addedTrack = library.playlists[playlistId].tracks.push(trackId);
    console.log(library.playlists[playlistId].tracks)
    console.log("The added track is:" + addedTrack);

}

addTrackToPlaylist("t03","p01");



// // generates a unique id
// // (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
}


// // adds a track to the library

var addTrack = function (name, artist, album) {

  var newId = uid();

  library.tracks[newId] = {}; // creates object for all key value pairs

  library.tracks[newId].id = newId;
  library.tracks[newId].name = name;
  library.tracks[newId].artist = artist;
  library.tracks[newId].album = album;



console.log(library.tracks[newId]);
  }

  addTrack("sarah", "outrageous", "cool");


// adds a playlist to the library

var addPlaylist = function (name) {

  var newPlaylist = uid();

  library.playlists[newPlaylist] = {};

  library.playlists[newPlaylist].id = newPlaylist;
  library.playlists[newPlaylist].name = name;
  library.playlists[newPlaylist].tracks = [];

  console.log(library.playlists[newPlaylist]);
}
addPlaylist("the best playlist ever!");

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }

// [printFrame] > git remote set - url origin git @github.com: sjay3000 / error - projects.git
// vagrant[printFrame] > git remote rm