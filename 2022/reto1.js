const gifts = ['book', 'game', 'socks'];

function wrapping(gifts) {
  let wrapped = [];
  let paper = '';
  gifts.forEach((elem) => {
    for (let i = 0; i > elem.toString().length + 2; i++) {
      paper += '*';
    }
    wrapped.push(paper);
    paper = '';
  });
  return wrapped;
}

const wrapped = wrapping(gifts);

console.log(wrapped);
/* [
    "******\n*book*\n******",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
   ] */
