import React from "react";
import { Link } from "react-router-dom";
import GuestRoute from "./GuestRoute";
import BusinessDetailEdit from "../../page/businessDetailEdit";
import SignUp from "../../page/signup";
const Layout = React.lazy(() => import("./../../common/layout"));
const BuisnessDetails = React.lazy(() => import("../../page/buisnessdetails"));
const Content = React.lazy(() => import("../../page/content"));
const ViewEvent = React.lazy(() => import("../../page/viewEvent"));
const Imagegallery = React.lazy(() => import("../../page/imagegallery"));
const Buisnessuser = React.lazy(() => import("../../page/buisnessuser"));
const Login = React.lazy(() => import("../../page/login"));
const EditUserDetails = React.lazy(() => import("../../page/editUserDetails"));
const RoleProtectedRoute = React.lazy(() => import("./RoleProtectedRoute"));

export const PATHS = {
  buisnessDetails: "/dashboard/buisness-details",
  content: "/dashboard/content",
  imageGallery: "/dashboard/image-gallery",
  businessUser: "/dashboard/buisness-users",
  login: "/login",
  dashboard: "/dashboard",
};

export const routeslist = [
  {
    path: "/",
    // element: <GuestRoute element={<Layout />} />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },

    ],
  },
  {
    path: "/dashboard",
    element: <RoleProtectedRoute element={<Layout />} module="user" />,
    children: [
      {
        path: "business-details",
        element: <BuisnessDetails />,
      },
      {
        path: "edit-user",
        element: <EditUserDetails />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <RoleProtectedRoute element={<Layout />} module="business" />,
    children: [
      {
        path: "edit-business-details",
        element: <BusinessDetailEdit />,
      },
      {
        path: "content",
        element: <Content />,
      },
      {
        path: "content/:id",
        element: <ViewEvent />,
      },
      {
        path: "image-gallery",
        element: <Imagegallery />,
      },
      {
        path: "business-user",
        element: <Buisnessuser />,
      },
    ],
  },
  // @fixme new 404 page must be there
  {
    path: "*",
    element: (
      <>
        404, Page not found
        <Link to="/login">Go Home</Link>
      </>
    ),
  },
];
