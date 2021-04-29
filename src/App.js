import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/login";
import { useStateValue } from "./Components/Context/StateProvider";
function App() {
  
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
       
        ) : (
          <>
            {/* header */}
            <Header />
            <div className="app__body">
              {/* sidebar */}
              <Sidebar />
              <Switch>
                {/* react-Router-->  chat */}
                <Route path="/room/:roomId" exact>
                  <Chat />
                </Route>
                <Route path="/" exact>
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
