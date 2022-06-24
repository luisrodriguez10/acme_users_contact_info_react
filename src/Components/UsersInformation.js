import React from "react";

const UserInformation = ({ users, deleteAUser, addAUser}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th colSpan={3}>Add a user</th>
          <th><button onClick={addAUser}>Add</button></th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>

        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>
                <a href={`#${user.id}`}>{user.name}</a>
              </td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td><button onClick={() => {deleteAUser(user)}}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserInformation;
