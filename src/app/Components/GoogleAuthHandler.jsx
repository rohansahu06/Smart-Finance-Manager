"use client";

import { useEffect } from "react";

const GoogleAuthHandler = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (token) {
            localStorage.setItem("token", token);

            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            );
        }
    }, []);

    return null;
};

export default GoogleAuthHandler;