function fitsInOneBox(boxes) {
  let canPack = true;
  boxes
    .sort((a, b) => a.l - b.l)
    .forEach((e, i, a) => {
      if (i > 0 && e.l <= a[i - 1].l) canPack = false;
      if (i > 0 && e.w <= a[i - 1].w) canPack = false;
      if (i > 0 && e.h <= a[i - 1].h) canPack = false;
    });
  return canPack;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
];

fitsInOneBox(boxes); // false
