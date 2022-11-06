import {
  CircularProgress,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Box,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";


const List = ({ places, childClicked }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  // add loading screen later
  return (
    <Box sx={{ padding: "25px" }}>
      <Typography variant="h4">
        Restaurants, Hotels and Attractions around you
      </Typography>

      <FormControl sx={formControlStyle}>
        <InputLabel id="select-type-label">Type</InputLabel>
        <Select
          labelId="select-type-label"
          id="select-type"
          value={type}
          label="Type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={formControlStyle}>
        <InputLabel id="select-rating-label">Rating</InputLabel>
        <Select
          labelId="select-rating-label"
          id="select-rating"
          value={rating}
          label="Rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} sx={listContainerStyle}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default List;

// Styles
const formControlStyle = {
  margin: "20px 4px ",
  minWidth: "120px",
  marginBottom: "20px",
};

// select
const listContainerStyle = {
  height: "75vh",
  overflow: "auto",
  marginTop: "15px",
};
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   loading: {
//     height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
//   },
//   marginBottom: {
//     marginBottom: '30px',
//   },
