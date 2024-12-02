import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarLayout from "../../Layout/SidebarLayout";
import LoadingWrapper from "../../ui/LoadingWrapper";

const NotificationsUser = () => {
  const currentUser = useSelector((state) => state.auth.user);

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [toggle, setToggle] = useState(true);
  const pageSize = 20;

  // Static Notifications Data
  useEffect(() => {
    const staticNotifications = [
      {
        id: 1,
        notificationType: "webinar",
        category: "Category 1",
        content: "New webinar on React announced!",
        createdAt: "2024-12-01T12:00:00Z",
      },
      {
        id: 2,
        notificationType: "alert",
        category: "Category 2",
        content: "System maintenance scheduled for tomorrow.",
        createdAt: "2024-11-30T15:30:00Z",
      },
      {
        id: 3,
        notificationType: "announcement",
        category: "Category 3",
        content: "Holiday schedule updated.",
        createdAt: "2024-11-29T08:15:00Z",
      },
      // Add more static notifications as needed
    ];

    setNotifications(staticNotifications);
    setLoading(false);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const filteredNotifications = notifications.filter(
    (notification) =>
      currentCategory === "All" ||
      notification.category === currentCategory
  );

  const totalPages = Math.ceil(filteredNotifications.length / pageSize);
  const paginatedNotifications = filteredNotifications.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <SidebarLayout>
      <LoadingWrapper loading={loading}>
        <div className="p-6 text-white mb-10">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Notification</h1>
            <div className="flex items-center">
              <label className="flex items-center cursor-pointer">
                <span className="mr-2 text-sm">Turn Off all Notifications</span>
                <div
                  className={`w-10 h-5 rounded-full ${
                    toggle ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  onClick={handleToggle}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      toggle ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </label>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-6">
            <div className="flex space-x-4 border-b border-gray-700 pb-2">
              {["All", "Category 1", "Category 2", "Category 3"].map(
                (category) => (
                  <button
                    key={category}
                    className={`text-sm ${
                      currentCategory === category
                        ? "text-white font-semibold border-b-2 border-blue-500"
                        : "text-gray-400"
                    }`}
                    onClick={() => setCurrentCategory(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="mt-6">
            {paginatedNotifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center bg-transparent border-b border-[#4c4c4c] rounded-b-none p-4 rounded-lg mb-4"
              >
                <div className="text-blue-400 text-2xl mr-4">
                  {/* Use different icons based on notification type */}
                  {notification.notificationType === "webinar" ? (
                    <i className="fas fa-video-camera"></i>
                  ) : (
                    <i className="fas fa-bell"></i>
                  )}
                </div>
                <div>
                  <h2 className="font-semibold">{notification.notificationType}</h2>
                  <p className="text-sm text-gray-400 line-clamp-1 text-ellipsis">
                    {notification.content}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.createdAt.split("T")[0]}
                  </p>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-6 items-center">
              <button
                className="px-4 py-2 bg-[#5242b6] text-white rounded-md disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <span className="px-4 text-gray-300">
                {currentPage} of {totalPages}
              </span>
              <button
                className="px-4 py-2 bg-[#5242b6] text-white rounded-md disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </LoadingWrapper>
    </SidebarLayout>
  );
};

export default NotificationsUser;
