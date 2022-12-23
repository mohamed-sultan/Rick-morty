import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export const SideMenuLinks = [
  {
    id: 1,
    title: "Now Playing",
    path: "/",
    icon: <RocketLaunchIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    id: 2,
    title: "Popular",
    path: "/categories/popular",
    icon: <RocketLaunchIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    id: 3,
    title: "Top Rated",
    path: "/categories/top-rated",
    icon: <RocketLaunchIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    id: 4,
    title: "Upcoming",
    path: "/categories/upcoming",
    icon: <RocketLaunchIcon color="primary" sx={{ fontSize: 40 }} />,
  },
];
