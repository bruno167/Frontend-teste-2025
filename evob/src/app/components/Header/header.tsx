"use client";

import { useState, useEffect } from "react";
import HeaderDesktop from "./desktop/header-desktop";
import HeaderMobile from "./mobile/header-mobile";
import useMediaQuery from "./use-media-query";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
