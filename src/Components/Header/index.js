import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../Context/StateProvider";

function Header() {
  const [{user}] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* avatars for login user */}
        <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL} />
        {/* time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* search icon */}
        <SearchIcon />
        {/* input */}
        <input placeholder="Search Slack" />
      </div>
      <div className="header__right">
        <HelpOutLineIcon />
      </div>
    </div>
  );
}

export default Header;
