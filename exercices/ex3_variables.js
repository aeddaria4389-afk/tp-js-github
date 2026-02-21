
let notes = [12, 8, 15, 10, 7];


let somme = 0;
for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
}
let moyenne = somme / notes.length;


let meilleureNote = notes[0];
for (let i = 1; i < notes.length; i++) {
    if (notes[i] > meilleureNote) {
        meilleureNote = notes[i];
    }
}


let nbNotesSup10 = 0;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        nbNotesSup10++;
    }
}


console.log("Résumé des notes :");
console.log("Notes :", notes);
console.log("Moyenne :", moyenne.toFixed(2));
console.log("Meilleure note :", meilleureNote);
console.log("Nombre de notes ≥ 10 :", nbNotesSup10);