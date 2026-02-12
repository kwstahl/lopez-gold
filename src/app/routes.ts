import { createBrowserRouter } from "react-router";
import DeviceMockup from "./components/DeviceMockup";
import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame5 from "./components/Frame5";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DeviceMockup,
  },
  {
    path: "/frame1",
    Component: Frame1,
  },
  {
    path: "/product",
    Component: Frame2,
  },
  {
    path: "/checkout",
    Component: Frame3,
  },
  {
    path: "/admin",
    Component: Frame4,
  },
  {
    path: "/expansion",
    Component: Frame5,
  },
]);