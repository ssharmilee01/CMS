import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function PageNotFound() {

    return (
        <>
            <Typography variant="h4">Page Not Found</Typography>

            <Typography variant="body1" color="gray">
                Go to <Link to="/" style={{ textDecoration: "none" }}>Login Page</Link>
            </Typography>
        </>
    );
}

export default PageNotFound;