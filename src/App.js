// import { createTheme, ThemeProvider, makeStyles } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";

const App = () => {
  // create states for places, coordinates, and bounds
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [boundaries, setBoundaries] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  // get coordinates from browser and set them to state
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        console.log("coordinates", coordinates);
      }
    );
  }, []);

  // fetch places data from TravelAdvisor API using custom hook and the users location as params, then set the data to state
  // useEffect(() => {
  //   getPlacesData(boundaries?.sw, boundaries?.ne).then((data) => {
  //     setPlaces(data.data);
  //     console.log(data.data);
  //   });
  // }, [coordinates, boundaries]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClicked={childClicked} />
        </Grid>
        <Grid
          sx={{
            margin: "40px 0",
          }}
          item
          xs={12}
          md={8}
        >
          <Map
            setCoordinates={setCoordinates}
            setBoundaries={setBoundaries}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
