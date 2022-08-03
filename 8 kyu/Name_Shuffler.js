/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

*/
function nameShuffler(str) {
  const strCopy = str;
  console.log(strCopy.split(" ").reverse().join(" "));
  return strCopy.split(" ").reverse().join(" ");
}
nameShuffler("john McClane");
