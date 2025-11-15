import React from "react";
import { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";


export default function Home() {
    useEffect(() => {
    // 1. Check if a token is in the URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      // 2. Save the token to localStorage
      localStorage.setItem('authToken', token);

      // 3. (Optional but recommended) Clean the URL so the token isn't visible
      // This reloads the page without the ?token=... part
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []); 

    return(
        <>
        <TopBar />
        <Dashboard/>
        </>
    )
}
