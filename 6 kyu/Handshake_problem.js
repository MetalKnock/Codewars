/*
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

*/
function getParticipants(handshakes) {
  let x1 = Math.ceil(0.5 * (1 + Math.sqrt(8 * handshakes + 1)));
  let x2 = Math.ceil(0.5 * (1 - Math.sqrt(8 * handshakes + 1)));
  return x1 >= 0 && x2 >= 0 ? Math.min(x1, x2) : Math.max(x1, x2);
}
console.log(getParticipants(45));
console.log(getParticipants(0));
console.log(getParticipants(5));
