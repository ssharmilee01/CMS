import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {

    return (
        <>
            {console.log("Hello")}
            <Outlet />
        </>
    );
}

export default RootLayout;