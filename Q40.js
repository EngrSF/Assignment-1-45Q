//Q-40. Assignment No.1 of 45 Questions
// Album: Write a function called make_album() that builds a Object 
// describing a music album. The function should take in an artist name and 
// an album title, and it should return a Object containing these two pieces of 
// information. Use the function to make three dictionaries representing different 
// albums. Print each return value to show that Objects are storing the album information 
// correctly. Add an optional parameter to make_album() that allows you to store the 
// number of tracks on an album. If the calling line includes a value for the number 
// of tracks, add that value to the album’s Object. Make at least one new function
// call that includes the number of tracks on an album.
function make_album(artNam, albTit) {
    var musAlbm = { artNam: artNam, albTit: albTit };
    return musAlbm;
}
var Dict1 = make_album("Rafi", "Oldies of 40's");
var Dict2 = make_album("Lata", "Melodies of 50's");
var Dict3 = make_album("Talat", "Ever Green Ghazal");
console.table(Dict1);
console.table(Dict2);
console.table(Dict3);
