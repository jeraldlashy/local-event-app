import classes from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return(
  <footer className={classes.footer}>
    {`Made with ♥ by Jerald Lashy Jeffery Copyright © ${year}`}
  </footer>);
}

export default Footer;
