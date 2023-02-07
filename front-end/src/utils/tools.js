export const convertToVND = (x) => {
  x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return x;
};
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
export const convertNameCinema = (currentCinema) => {
  switch (currentCinema) {
    case "bttx":
      return "Beta Thanh Xuân";
    case "btmd":
      return "Beta Mỹ Đình";
    case "btqt":
      return "Beta Quang Trung";
    case "btbg":
      return "Beta Bắc Giang";
    default:
      return "Beta Thanh Xuân";
  }
};
