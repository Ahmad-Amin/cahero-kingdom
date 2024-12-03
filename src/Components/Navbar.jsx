import React, { useState, useRef, useEffect } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { NavLink, Link, useLocation } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scrolling state
  const profileDropdownRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation(); // To determine the active tab

  // Static user data
  const currentUser = {
    firstName: "John",
    email: "john.doe@example.com",
    role: "admin", // Change to "user" to test user-specific behavior
  };

  // Static notifications
  const notifications = [
    {
      notificationType: "Message",
      content: "You have a new message from Sarah.",
      time: "2 hours ago",
    },
    {
      notificationType: "Alert",
      content: "Server maintenance scheduled for tomorrow.",
      time: "1 day ago",
    },
    {
      notificationType: "Reminder",
      content: "Complete your profile setup.",
      time: "3 days ago",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setIsProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-black"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/homepage">
            <img
              src={`/Images/Cahero.png`}
              alt="Logo"
              className="h-16"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/homepage"
                className={() =>
                  `font-medium ${
                    location.pathname.includes("/homepage")
                      ? "text-white"
                      : "text-gray-400"
                  } hover:text-white`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                className={() =>
                  `font-medium ${
                    location.pathname.includes("/community")
                      ? "text-white"
                      : "text-gray-400"
                  } hover:text-white`
                }
              >
                Community
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-7">
          <div ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="p-2 bg-[#1b1a1a] hover:bg-[#413e3e] text-white rounded-lg"
            >
              <NotificationsNoneIcon />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-56 top-full mt-3 bg-[#0d0d0d] text-white rounded-md shadow-lg z-30">
                <div className="text-center py-2 font-bold border-b border-gray-600">
                  Notifications
                </div>
                {notifications.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <li
                        key={index}
                        className="flex items-center h-20 px-4 py-2 hover:bg-[#404041] cursor-pointer"
                      >
                        <div className="flex flex-col flex-grow overflow-hidden">
                          <div className="font-semibold">
                            {notification.notificationType}
                          </div>
                          <div className="text-sm text-gray-400 overflow-hidden truncate">
                            {notification.content}
                          </div>
                        </div>
                        <span className="ml-4 text-xs text-gray-400">
                          {notification.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-2 px-4 font-semibold text-lg text-white opacity-70">
                    No notifications available
                  </div>
                )}
              </div>
            )}
          </div>
          <div ref={profileDropdownRef} className="relative flex flex-row gap-3">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">
                {currentUser.firstName[0].toUpperCase()}
              </span>
            </div>
            <button
              onClick={toggleProfileDropdown}
              className="text-gray-400 hover:text-white font-medium"
            >
              {currentUser.firstName}
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 top-full mt-3 bg-[#0d0d0d] text-white rounded-md shadow-lg z-30">
                <div className="px-4 py-3 border-b border-gray-600">
                  <div className="text-base font-bold">
                    {currentUser.firstName}
                  </div>
                  <div className="text-sm text-gray-400 truncate">
                    {currentUser.email}
                  </div>
                </div>
                <ul className="py-2">
                  <li className="m-2">
                    <Link
                      to="/homepage"
                      className="block px-4 py-2 hover:bg-[#385dcc] rounded-lg ease-in-out transition duration-300"
                    >
                      <DashboardOutlinedIcon className="mr-2" />
                      Dashboard
                    </Link>
                  </li>
                  <li className="m-2">
                    <Link
                      to="/profile-settings"
                      className="block px-4 py-2 hover:bg-[#385dcc] rounded-lg ease-in-out transition duration-300"
                    >
                      <SettingsOutlinedIcon className="mr-2" />
                      Settings
                    </Link>
                  </li >
                  {/* {currentUser.role === "admin" && (
                    <li className="mx-2">
                      <Link
                        // to="/admin-panel"
                        className="block px-4 py-2 hover:bg-[#385dcc] rounded-lg ease-in-out transition duration-300"
                      >
                        <AdminPanelSettingsOutlinedIcon className="mr-2" />
                        Admin Panel
                      </Link>
                    </li>
                  )} */}
                </ul>
                <div className="py-2 mx-2">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-red-600 hover:text-white hover:bg-red-700 rounded-lg ease-in-out transition duration-300"
                  >
                    <LogoutOutlinedIcon className="mr-2" />
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
