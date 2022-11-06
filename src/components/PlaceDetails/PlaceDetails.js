import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  Rating,
  Chip,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";

const PlaceDetails = ({ place }) => {
  if (!place.name || !place.photo) return null;

  return (
    <Card elevation={6} sx={cardStyle}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />

      <Box sx={cardContentStyle}>
        <Typography gutterBottom variant="h6">
          {place.name}
          {place?.open_now_text && (
            <Chip
              label={place.open_now_text}
              sx={{
                marginLeft: "10px",
                color:
                  place.open_now_text === "Open Now"
                    ? "white"
                    : "rgba(217,48,37,1.0)",
                backgroundColor:
                  place.open_now_text === "Open Now"
                    ? "rgba(225,225,225,0.3)"
                    : "",
              }}
              size="small"
            />
          )}
        </Typography>

        {
          // if place.rating exists, return Rating component
          place.rating && (
            <Box display="flex" justifyContent="space-between">
              <Rating size="small" value={Number(place.rating)} readOnly />
              <Typography gutterBottom variant="subtitle2">
                Out of {place.num_reviews} reviews
              </Typography>
            </Box>
          )
        }

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Price</Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Distance</Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.distance_string} away
          </Typography>
        </Box>

        {/* {place?.cuisine?.map((cuisine) => (
          <Chip
            key={cuisine.key}
            size="small"
            label={cuisine.name}
            sx={chipStyle}
          />
        ))} */}

        {place?.address && (
          <Typography
            gutterBottom
            variant="caption"
            color="white"
            sx={addressStyle}
          >
            <LocationOnOutlinedIcon /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            gutterBottom
            variant="caption"
            color="white"
            sx={PhoneStyle}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            sx={ButtonStyle}
            onClick={() => window.open(place.website, "_blank")}
          >
            Visit Website
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default PlaceDetails;

// Styles
const cardStyle = {
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  minWidth: 200,
  minHeight: 360,

  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0.3))",
  },
};

const cardContentStyle = {
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
  color: "white",
  padding: "1rem",
};

const chipStyle = {
  margin: "5px 5px 5px 0",
  color: "white",
  backgroundColor: "rgba(0,0,0,0.5)",
};

const addressStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
};

const PhoneStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const ButtonStyle = {
  color: "white",
  borderColor: "white",
  padding: "5px 10px",
  backgroundColor: "rgba(225,225,225,0.3)",

  "&:hover": {
    backgroundColor: "rgba(225,225,225,0.5)",
  },
};
