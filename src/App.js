import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import ToDo from "./pages/ToDo";
import ChatBox from "./components/ChatBox";
import MailBox from "./components/MailBox";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-profile/:id" element={<UserProfile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/mailbox/:id" element={<MailBox />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
