import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.rubikDirtRegular}>KBIT-2 Calculator</h1>
        <img className={classes.logo} src="logo-abc-ds.svg" alt="logo" />
        <div className={classes.content}>
          <p className={classes.description}>
            The Kaufman Brief Intelligence Test Second Edition (KBIT-2) is a
            brief measure of verbal and nonverbal intelligence used in the
            Alzheimer's Biomarker Consortium - Down Syndrome study.{" "}
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;
