import React, { useEffect, useState } from "react";
import Inside from "../../components/Container/Inside/Inside";
import GetUserService from "../../service/userService/getUserService";
import About from "../../components/About/About";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await GetUserService.getUserService();
        console.log(response);
        if (response && response.status === 200) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
  }, []);

  return <Inside rightContent={<About userData={user} />} />
};

export default Profile;
