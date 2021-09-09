import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {};

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "cbc28cd959mshe015932a7e658cbp104018jsn7a611cf4e91a",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
