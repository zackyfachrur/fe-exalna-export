import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home/index";
import Trade from "./pages/trade/index";
import Saved from "./pages/saved/index";
import Chat from "./pages/chat/index";
import Messages from "./pages/messages/index";

// Auth
import SignIn from "./pages/auth/sign-in/index"
import SignUp from "./pages/auth/sign-up/index"

// Layout
import Layout from "./layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "saved", element: <Saved /> },
      { path: "chat", element: <Chat /> },
      { path: "trade", element:  <Trade />},
      { path: "messages", element: <Messages /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
]);
