import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {

    return (
        <>
            {console.log("")}
            <Outlet />
        </>
    );
}

export default RootLayout;