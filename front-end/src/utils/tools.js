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
export const convertDate = (values) => {
  const convertDay = values?.premiereDate?._d.toLocaleDateString().split("/");
  const [day, month, year] = convertDay;
  const newDay = day.length === 1 ? `0${day}` : day;
  const newMonth = month.length === 1 ? `0${month}` : month;
  const newDate = [newDay, newMonth, year].join("/");
  return newDate;
};
