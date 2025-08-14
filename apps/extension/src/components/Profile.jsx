import React from "react";
import avatarMan from "../assets/icons/avatar-man.svg";

function Profile() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="block w-full rounded-full size-[100px] border-3 border-violet-600">
        <img
          src={avatarMan}
          alt="User Profile Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="block w-full">
        <h1 className="text-xl font-semibold">Dhiraj Arya</h1>
        <p className="text-center opacity-80">Student</p>
      </div>
    </div>
  );
}

export default Profile;
