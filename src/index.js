import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import UsersInformation from "./Components/UsersInformation";
import UserInformation from "./Components/UserInformation";
import { faker } from "@faker-js/faker";
import { fetchUsers, createUser,deleteUser } from "./api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userSelected: "",
    };

    this.deleteAUser = this.deleteAUser.bind(this);
    this.addAUser = this.addAUser.bind(this);
  }

  async componentDidMount() {
    const users = await fetchUsers();
    this.setState({ users });
    const userSelected = window.location.hash.slice(1);
    this.setState({ userSelected });
    window.addEventListener("hashchange", () => {
      const userSelected = window.location.hash.slice(1);
      this.setState({ userSelected });
    });
  }

  async addAUser() {
    const user = await createUser({
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      adj: faker.word.adjective(),
      vehicle: faker.vehicle.vehicle(),
      bio: faker.lorem.paragraph(),
    });
    const users = [...this.state.users, user];
    this.setState({ users });
  }

  async deleteAUser(user) {
    await deleteUser(user)
    const users = this.state.users.filter((_user) => _user.id !== user.id);
    this.setState({ users });
  }

  render() {
    const { users, userSelected } = this.state;
    const { deleteAUser, addAUser } = this;
    return (
      <div>
        <h1>
          <a href="#">Acme Users Contact Information</a>
        </h1>
        <div>
          {userSelected ? (
            <UserInformation userSelected={userSelected} users={users} />
          ) : (
            <UsersInformation
              users={users}
              deleteAUser={deleteAUser}
              addAUser={addAUser}
            />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
