import GoogleMapReact from "google-map-react";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";

// receive coordinates, setCoordinates, and setBoundaries as props
const Map = ({
  setCoordinates,
  setBoundaries,
  coordinates,
  places,
  setChildClicked,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={mapContainerStyle}>
      {/* pass coordinates, setCoordinates, and setBoundaries to GoogleMapReact component */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA0pZSTOqLuBIuvg0ScftE8Hv6g6FdBfwY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          // set coordinates and boundaries to state with data from GoogleMapReact component
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBoundaries({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map(
          (place, i) =>
            // if place.name and place.photo is not null, render a marker
            place.name &&
            place.photo && (
              <Box
                sx={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,

                  "&:hover": {
                    zIndex: 5,
                  },
                }}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
              >
                {matches ? (
                  <Paper elevation={3} sx={paperStyle}>
                    <Typography
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                      gutterBottom
                      variant="subtitle2"
                      className="place"
                    >
                      {place.name}
                    </Typography>
                    <img src={place.photo.images.large.url} alt={place.name} />
                    {place.rating && (
                      <Rating
                        size="small"
                        value={Number(place.rating)}
                        readOnly
                      />
                    )}
                  </Paper>
                ) : (
                  <LocationOnIcon color="primary" fontSize="large" />
                )}
              </Box>
            )
        )}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;

// Styles
const mapContainerStyle = {
  width: "100%",
  height: "80vh",
};

const markerContainerStyle = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,

  "&:hover": {
    zIndex: 5,
  },
};

const paperStyle = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
};

// paper: {
//     padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
//   },
//   mapContainer: {
//     height: '85vh', width: '100%',
//   },
//   markerContainer: {
//     position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
//   },
//   pointer: {
//     cursor: 'pointer',
//   },
