function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let cities = 0;
  return giftsCities
    .sort((a, b) => b - a)
    .reduce((total, current) => {
      if (
        cities == maxCities ||
        total + current > maxGifts ||
        total + current === maxGifts - 1
      ) {
        return total;
      }
      cities++;
      return (total += current);
    }, 0);
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities); // 20
getMaxGifts([50], 15, 1); // 0
getMaxGifts([50], 100, 1); // 50
getMaxGifts([50, 70], 100, 1); // 70
getMaxGifts([50, 70, 30], 100, 2); // 100
getMaxGifts([50, 70, 30], 100, 3); // 100
getMaxGifts([50, 70, 30], 100, 4); // 100
