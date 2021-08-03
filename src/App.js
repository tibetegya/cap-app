import { useState } from "react";
import "./styles/styles.scss";
import Home from "./components/Home";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import CachedIcon from "@material-ui/icons/Cached";
import AccountIcon from "@material-ui/icons/AccountBalanceWallet";

const sections = [
  { title: "Home" },
  { title: "Movies" },
  { title: "Series" },
  { title: "Settings" }
];

const Transactions = () => <div>Transactions</div>;
const Accounts = () => <div>Accounts</div>;

const getTab = (tab) => {
  switch (tab) {
    case 0:
      return <Home />;
    case 1:
      return <Transactions />;
    case 2:
      return <Accounts />;
    default:
      return null;
  }
};

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

export default function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  console.log("current", value);
  return (
    <div className="App">
      <main>
        <div className="search">{getTab(value)}</div>
      </main>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<AppsIcon />} />
        <BottomNavigationAction label="Transactions" icon={<CachedIcon />} />
        <BottomNavigationAction label="Accounts" icon={<AccountIcon />} />
      </BottomNavigation>
    </div>
  );
}
