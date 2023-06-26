import profile1 from "./profile_1.png";
import profile2 from "./profile_2.png";
import profile3 from "./profile_3.png";
import profile4 from "./profile_4.png";
import profile5 from "./profile_5.png";
import profile6 from "./profile_6.png";

export function getProfile() {
  const images = [profile1, profile2, profile3, profile4, profile5, profile6];
  const image = images[Math.floor(Math.random() * 6)];

  return image;
}

export function getNickname() {
  const nicknames = [
    "potate",
    "tomato",
    "strawberry",
    "snack",
    "hamburger",
    "water",
    "kimchi",
    "cheese",
  ];
  const nickname = nicknames[Math.floor(Math.random() * 8)];

  return nickname;
}
