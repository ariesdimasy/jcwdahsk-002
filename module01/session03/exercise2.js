for (var i = 1; i <= 10; i++) {
    console.log(i, "x", 9, "=", i * 9);
}
console.log("===================================");
var word = "kasur ini rusak";
var reversed = "";
// reversed += word[1]
// reversed += word[0]
// reversed = word[4] + word[3] + word[2] + word[1] + word[0]
for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
    console.log("reversing:", reversed);
}
console.log("reversed word:", reversed);
if (reversed == word) {
    console.log("The word is a palindrome");
}
else {
    console.log("The word is not a palindrome");
}
