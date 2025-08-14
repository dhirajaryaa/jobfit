import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import Profile from "./components/Profile";

function App() {
  const [authUser, setAuthUser] = useState(true);
  return (
    <main className="relative p-4 w-[350px]">
      {/* setting btn  */}
      <button className="text-gray-400 hover:text-gray-500 hover:rotate-45 duration-200 transition-all absolute top-2 right-2">
        <FaGear size="20" />
      </button>

      {/* user or auth btn  */}
      <div className="flex items-center py-2 justify-center mb-2">
        {authUser ? (
          <Profile />
        ) : (
          <button className="primary-btn">Login Account</button>
        )}
      </div>

      {/* profile update & resume btn  */}
      <div className="flex items-center gap-2 justify-center font-semibold mb-2">
        <button className="primary-btn">Resume Upload</button>
        <button className="secondary-btn">Update profile</button>
      </div>
    </main>
  );
}

export default App;
