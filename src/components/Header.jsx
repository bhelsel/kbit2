import { useState, useEffect } from "react";
import classes from "./Header.module.css";

function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.rubikDirtRegular}>KBIT-2 Calculator</h1>
        {!isLargeScreen && (
          <img className={classes.logo} src="logo-abc-ds.svg" alt="logo" />
        )}
        <div className={classes.content}>
          {!isLargeScreen && (
            <p className={classes.description}>
              The Kaufman Brief Intelligence Test Second Edition (KBIT-2) is a
              brief measure of verbal and nonverbal intelligence used in the
              Alzheimer's Biomarker Consortium - Down Syndrome study.{" "}
            </p>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
