import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home/index";
import Chat from "./pages/chat/index";
import Saved from "./pages/saved/index";
import Messages from "./pages/messages/index";

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
      { path: "messages", element: <Messages /> },
    ],
  },
]);
