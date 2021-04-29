import React, { useState } from "react";
import { useStateValue } from "../Context/StateProvider";
import db from "../../firebase";
import firebase from "firebase";
function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        })
    }
    setInput('')
  };
  return (
    <div className="chatInput">
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`MEssage # ${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
