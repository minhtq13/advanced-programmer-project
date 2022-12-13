import shazamFilm from "../../../asset/images/shazam-film.jpg";
import AvatarFilm from "../../../asset/images/flim-avatar.jpg";
import thanhsoiFilm from "../../../asset/images/thanhsoi-film.jpg";

const dataDay2 = [
  {
    id: 1,
    img: shazamFilm,
    title: "Shazam! Cơn thịnh nộ",
    tag: "Hoạt hình, Hành động",
    duration: 128,
    animation: "2D Phụ Đề",
    children: [
      {
        time: "19:30",
        emptyChair: 110,
      },
      {
        time: "20:15",
        emptyChair: 139,
      },
      {
        time: "21:00",
        emptyChair: 159,
      },
      {
        time: "21:45",
        emptyChair: 139,
      },
      {
        time: "22:30",
        emptyChair: 137,
      },
      {
        time: "23:15",
        emptyChair: 156,
      },
      {
        time: "24:00",
        emptyChair: 100,
      },
    ],
  },
  {
    id: 2,
    img: AvatarFilm,
    title: "Avatar 2: Dòng chảy của nước",
    tag: "Hành động, Phiêu Lưu",
    duration: 192,
    animation: "2D Phụ Đề",
    children: [
      {
        time: "20:00",
        emptyChair: 104,
      },
      {
        time: "22:00",
        emptyChair: 87,
      },
      {
        time: "23:00",
        emptyChair: 126,
      },
    ],
  },
  {
    id: 3,
    img: thanhsoiFilm,
    title: "Thanh Sói",
    tag: "Hành động",
    duration: 109,
    animation: "2D Phụ Đề",
    children: [
      {
        time: "19:45",
        emptyChair: 89,
      },
      {
        time: "22:40",
        emptyChair: 105,
      },
    ],
  },
];
export default dataDay2;
