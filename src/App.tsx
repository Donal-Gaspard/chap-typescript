import Layout from "./components/Layout.tsx";
import UserDashboard from "./components/userDashboard/UserDashboard.tsx";
import {useState} from "react";
import fakeUsers from "./data/fakeUsers.ts";

function App() {
  const [users, setUsers] = useState(fakeUsers)

  const onSearch = (search: string) => {
    if (search === '') {
      setUsers(fakeUsers)
    } else {
      const filteredUsers = fakeUsers.filter(user => {
        return user?.firstname?.toLowerCase().includes(search.toLowerCase()) ||
          user.lastname.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      })
      setUsers(filteredUsers)
    }
  }

  return (
    <>
      <Layout onSearch={onSearch}>
        <UserDashboard users={users} />
      </Layout>
    </>
  )
}

export default App
