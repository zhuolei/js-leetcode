// does magazineText has enough word for noteText
function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    })
    // console.log(magazineObj)
    var noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    })

    return noteIsPossible;
}
const noteText = 'this is the';
const magazineText = 'this is all the magazine text in this time';
harmlessRansomNote(noteText, magazineText);
console.log(harmlessRansomNote(noteText, magazineText));