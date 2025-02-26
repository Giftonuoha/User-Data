import React from "react";

const UserCardData = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p><strong>Job Role:</strong> {user.company.bs}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <div className="card-actions">
        <button className="view-profile">View Profile</button>
        <button className="contact">Contact</button>
      </div>
    </div>
  );
};

export default UserCardData;
