import { SELECT_MUSIC } from "../constans/Actionstypes";

const initialState = {
  playLists: [
    {
      id: 1,
      nameSong: "Cưới nhau đi",
      nameSinger: "Phát",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/9/d/a/49da6a1d6cf13a42e77bc3a945d9dd6b.jpg"
    },
    {
      id: 2,
      nameSong: "Khuê Mộc Lan",
      nameSinger: "Hương Ly",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/9/d/a/49da6a1d6cf13a42e77bc3a945d9dd6b.jpg"
    },
    {
      id: 3,
      nameSong: "Yêu là cưới",
      nameSinger: "Phát",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/9/d/a/49da6a1d6cf13a42e77bc3a945d9dd6b.jpg"
    },
    {
      id: 4,
      nameSong: "Cưới nhau đi",
      nameSinger: "Phát",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/9/d/a/49da6a1d6cf13a42e77bc3a945d9dd6b.jpg"
    }
  ]
};

const playListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MUSIC: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default playListReducer;
