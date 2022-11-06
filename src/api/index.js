// import axios from "axios";

// export const getPlacesData = async (sw, ne) => {
//   try {
//     // const response = await axios.get(URL, options);
//     // console.log(response);

//     const {
//       data: { data },
//     } = await axios.get(URL, {
//       url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
//       params: {
//         bl_latitude: sw.lat,
//         tr_latitude: ne.lat,
//         bl_longitude: sw.lng,
//         tr_longitude: ne.lng,
//       },
//       headers: {
//         "X-RapidAPI-Key": "42de696695msh49db979fb458e74p15f37cjsn7bb0ae314fee",
//         "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//       },
//     });

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// use fetch to get data from TravelAdvisor API
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const response = await fetch(
      `${URL}?bl_latitude=${sw?.lat}&tr_latitude=${ne?.lat}&bl_longitude=${sw?.lng}&tr_longitude=${ne?.lng}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "42de696695msh49db979fb458e74p15f37cjsn7bb0ae314fee",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
