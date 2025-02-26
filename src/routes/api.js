const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersData = async () => {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
