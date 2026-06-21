// const Person = {
//     Name: 'Ben'
// }


// Person.Name = 'Hasan'


// //console.log(Person.Name)

// const MyPlayList = {
//     Name: ['X1','X2','X3','x4']
// } 

// console.log(MyPlayList.Name[1])

// delete MyPlayList.Name

// console.log(MyPlayList)

const music = {
  currentTrack: 'Just Ken',
  trackIdx: 0,
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
  mute() {
    music.volume = 0;
  },
  next() {
    music.trackIdx += 1;
    music.currentTrack = music.currentPlaylist[music.trackIdx]
  },

};

console.log(music.currentTrack +' '+music.trackIdx+' '+music.volume)

music.next()
music.mute()

console.log(music.currentTrack +' '+music.trackIdx+' '+music.volume)
