let spotifai = [
    { id: 1, name: "Nirvana", followers: 2000, genre: 'Grunge', image: 'https://picsum.photos/200?v=1' },
    { id: 2, name: "Foo Fighters", followers: 1994, genre: 'Rock', image: 'https://picsum.photos/200?v=2' },
    { id: 3, name: "Led Zeppelin", followers: 1967, genre: 'Hard Rock', image: 'https://picsum.photos/200?v=3' },
    { id: 4, name: "Queens of the Stone Age", followers: 1997, genre: 'Stoner', image: 'https://picsum.photos/200?v=4' },
    { id: 5, name: "Pearl Jam", followers: 1990, genre: 'Grunge', image: 'https://picsum.photos/200?v=5' },
    { id: 6, name: "Queen", followers: 2990, genre: 'Hard Rock', image: 'https://picsum.photos/200?v=6' }]


function show() {
    return spotifai
}


function follow(bandID, newObjeto) {
    let spotiFollow = spotifai.findIndex(singleBand => singleBand.id === Number(bandID))
    console.log(spotiFollow)
    if (spotiFollow !== -1) {
        spotifai[spotiFollow] = newObjeto
    }
}


function obtBand(bandID) {
    let banda = spotifai.find((band) => band.id === Number((bandID)))
    return banda
}



export default {
    obtBand,
    show,
    follow
}