import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const useIsInViewport = (ref) => {
  const [isInViewPort, setIsInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { bottom } = ref.current.getBoundingClientRect();
      setIsInViewport(window.innerHeight - bottom > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isInViewPort;
};
