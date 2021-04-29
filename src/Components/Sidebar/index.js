import React,{useState,useEffect} from "react";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOption from "../SideBarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, PeopleAlt  } from "@material-ui/icons";
import db from '../../firebase';
import { useStateValue } from "../Context/StateProvider";

function Sidebar() {
    const [{user}] = useStateValue()
    const [channels,setChannels]= useState([]);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id:doc.id,
                name:doc.data().name
            })))
        ))
    },[])
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon/>
      </div>
        <SideBarOption Icon={InsertCommentIcon} title="Threat"/>
        <SideBarOption Icon={Inbox} title="Mentions"/>
        <SideBarOption Icon={Drafts} title="Saved items"/>
        <SideBarOption Icon={BookmarkBorder} title="Channel Browser"/>
        <SideBarOption Icon={PeopleAlt} title="People"/>
        <SideBarOption Icon={Apps} title="Apps"/>
        <SideBarOption Icon={FileCopy} title="File browser"/>
        <SideBarOption Icon={ExpandLess} title="Show Less"/>
        <hr/>
        <SideBarOption Icon={ExpandMore} title="Channel"/>
        <hr/>
        <SideBarOption Icon={Add} title="Add Channel" addChannelOption/>
        {channels.map(channel => (
            <SideBarOption title={channel.name} id={channel.id}/>
        ))}
    </div>
  );
}

export default Sidebar;
