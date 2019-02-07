var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },

  printPlaylists: function (playlist) {
    for (var pId in playlist) {


      console.log(`${pId}: ${playlist[pId].name} - ${playlist[pId].tracks.length} tracks`)
    }
  },

  printTracks: function (track) {
    for (var tId in track) {

      console.log(`${tId}: ${track[tId].name} ${track[tId].artist} ${track[tId].album}`)
    }
  },

printPlaylist: function (playlistId) {
  let playlist = this.playlists[playlistId];
  let pName = playlist.name;
  let trackIds = playlist.tracks;
  let res = "";

  res += `${playlistId}: ${pName} - ${trackIds.length}\n`;

  trackIds.forEach((tid) => {
    let track = this.tracks[tid];
    res += `${tid}: ${track.name} by ${track.artist} (${track.album})\n`;

  })
  console.log(res);
},

  printTracks: function (track) {
    for (var tId in track) {
      console.log(`${tId}: ${track[tId].artist} ${track[tId].album}`)
    }

  },

  addTrackToPlaylist: function (trackId, playlistId) {
    var addedTrack = this.playlists[playlistId].tracks.push(trackId);
    console.log("The added track is:" + addedTrack);
    console.log(this.playlists[playlistId].tracks)
  },

  addTrack: function (name, artist, album) {

    var newId = uid();

    this.tracks[newId] = {};

    this.tracks[newId].id = newId;
    this.tracks[newId].name = name;
    this.tracks[newId].artist = artist;
    this.tracks[newId].album = album;

    console.log(library.tracks[newId]);
  },


  addPlaylist: function (name) {
    var newPlaylist = uid();

    this.playlists[newPlaylist] = {};

    this.playlists[newPlaylist].id = newPlaylist;
    this.playlists[newPlaylist].name = name;
    this.playlists[newPlaylist].tracks = [];
    console.log(this.playlists[newPlaylist]);
  }
};

var uid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

library.printPlaylists(library.playlists);
library.printPlaylist("p01");
library.printTracks(library.tracks);
library.addTrackToPlaylist("t03", "p01");
library.addTrack("sarah", "fabulous", "cool");
library.addPlaylist("the best playlist ever!");
