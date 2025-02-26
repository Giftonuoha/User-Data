import "./styles/styles.css";


import React, { useEffect, useState } from "react";
import { fetchUsersData} from "./routes/api";
import UserCardData from "./components/UserCardData";
import Pagination from "./components/Pagination";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsersData();
      setUsers(data);
    };
    getData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="Search professionals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
        />
        <div className="grid">
          {currentUsers.map((user) => (
            <UserCardData key={user.id} user={user} />
          ))}
        </div>
        <Pagination
          totalPosts={filteredUsers.length}
          postsPerPage={usersPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default App;

