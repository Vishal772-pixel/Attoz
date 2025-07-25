import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants.jsx";
import { SearchBar } from "./SearchBar";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={60} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;