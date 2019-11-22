import React from "react";
import logo from "./logo.svg";
import styles_scss from "./index.module.scss";
import { Link } from "react-router-dom";

const index: React.FC = () => {
  return (
    <div className={styles_scss.App}>
      <header className={styles_scss["App-header"]}>
        <a
          className={styles_scss.githubLink}
          href="https://github.com/meichangliang/Public_React_WebApp_TS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("./Public_React_WebApp_TS.png")}
            className={styles_scss.myLogo}
            alt="logo"
          />
        </a>
        <img src={logo} className={styles_scss["App-logo"]} alt="logo" />
        <p>
          欢迎使用 <code>Public_React_WebApp_TS</code>
        </p>
        <a
          className={styles_scss["React-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className={styles_scss["TS-link"]}
          href="http://www.typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TypeScript
        </a>
        <a
          className={styles_scss.githubLink}
          href="https://github.com/meichangliang/Public_React_WebApp_TS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Github
        </a>
        <Link className={styles_scss.demoLink} to="/demo">
          Demo
        </Link>
      </header>
    </div>
  );
};

export default index;
