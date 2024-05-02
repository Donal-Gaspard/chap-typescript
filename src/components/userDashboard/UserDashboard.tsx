import Users from "./Users.tsx";
import fakeUsers from "../../data/fakeUsers.ts";
import {Button} from "@mui/material";
import UserCard from "./UserCard.tsx";

const UserDashboard = () => {
  return (
    <div>
      <UserCard/>
      <Button variant="contained" color="primary">
        Button
      </Button>
      <Users users={fakeUsers}/>
    </div>
  );
};

export default UserDashboard;
