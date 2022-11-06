import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  // Styles
  // toolbar
  const toolbarStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  // title
  const TitleStyle = {
    display: {
      xs: "none",
      sm: "block",
    },
  };

  // search
  const SearchStyle = {
    position: "relative",
    borderRadius: "2px",
    backgroundColor: "#ffffff2f",
    "&:hover": {
      backgroundColor: "#f0f0f055",
    },
    marginRight: "8px",
    marginLeft: {
      xs: "0",
      sm: "12px",
    },
    width: {
      xs: "100%",
      sm: "auto",
    },
  };

  // search icon
  const SearchIconStyle = {
    padding: "5px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // input
  const InputStyle = {
    color: "inherit",
    padding: "5px",
    paddingLeft: "40px",
    width: {
      sm: "100%",
      md: "20ch",
    },
  };

  return (
    <AppBar position="static">
      {/* Navbar */}
      <Toolbar sx={toolbarStyle}>
        <Typography variant="h5" sx={TitleStyle}>
          Travel Advisor
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={TitleStyle}>
            Explore new places
          </Typography>

          {/* <Autocomplete> */}
          <Box sx={SearchStyle}>
            <Box sx={SearchIconStyle}>
              <SearchIcon />
            </Box>
            <InputBase placeholder="Search..." sx={InputStyle} />
          </Box>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
