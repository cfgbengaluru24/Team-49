import {
    IconButton,
    Menu,
    MenuItem,
    AppBar,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
    Button,
    ButtonGroup,
} from "@mui/material";
import { useState } from "react";
// import Menuicon from "@mui/icons-material/Menu";
import { Done, Menuicon } from "../../assets/svgvectors";
import "./Header.css";

import { Link, NavLink } from "react-router-dom";
import UIlogo from "../../assets/UI_Logo_FINAL.png";

const Menubutton = ({role}) => {
    const [anchorElm, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false);
    };
    const handleClick = (e) => {
        setAnchorElm(e.currentTarget);
        setOpen(true);
    };

    return (
        <Box sx={{ paddingRight: 1 }}>
            <IconButton onClick={handleClick} className="icon-button" aria-label="delete" size="large">
                <Menuicon />
            </IconButton>
            <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
                {role &&<NavLink style={{ textDecoration: "none" }} to={`/${role}`}>
                    <MenuItem sx={{ textDecoration: "none", color: "black" }} onClick={handleClose}>
                        {role}
                    </MenuItem>
                </NavLink>}
                <NavLink style={{ textDecoration: "none" }} to="/">
                    <MenuItem sx={{ textDecoration: "none", color: "black" }} onClick={handleClose}>
                        Home
                    </MenuItem>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="/feedback">
                    <MenuItem sx={{ textDecoration: "none", color: "black" }} onClick={handleClose}>
                        Feedback
                    </MenuItem>
                </NavLink>
            </Menu>
        </Box>
    );
};

const HeaderTabs = ({role}) => {
    console.log(role);

    return (

        <ButtonGroup sx={{ textDecoration: "none", marginRight: 1 }}>
             {role && <NavLink className="navlink" to={`/${role}`}>
                <Button
                    sx={{
                        border: "0",
                        color: "black",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                    color="inherit"
                >
                    {role}
                </Button>
            </NavLink>}
            <NavLink className="navlink" to="/">
                <Button
                    sx={{
                        border: "0",
                        color: "black",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                    color="inherit"
                >
                    {role?"Logout":"Login"}
                </Button>
            </NavLink>
            <NavLink className="navlink" to="/Feedback">
                <Button
                    sx={{
                        border: 0,
                        color: "black",
                        backgroundColor: "inherit",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                    color="inherit"
                >
                    Feedback
                </Button>
            </NavLink>
        </ButtonGroup>
    );
};

const Header = () => {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down(800));
    const role= localStorage.getItem("position");
    return (
        <>
            <AppBar
                sx={{
                    backgroundColor: "white",
                    // backdropFilter: "blur(10px)",
                    // py: 0.5,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    zIndex: 100,
                    
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: 2,
                        minHeight: "60px",
                    }}
                >
                    <Link style={{ textDecoration: "none", display: "flex", alignItems: "center" }} to="/">
                        <Typography
                            variant="h5"
                            sx={{
                                color: "black",
                                fontWeight: 600,
                            }}
                        >
                            <img src={UIlogo} alt="UIlogo" style={{height: "50px"}}/>
                        </Typography>
                    </Link>
                </Box>
                {mobileView ? <Menubutton role={role} /> : <HeaderTabs role={role} />}
            </AppBar>
        </>
    );
};

export default Header;
