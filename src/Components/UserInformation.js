import React, { Component } from "react";


const UserInformation = ({userSelected, users}) => {

  const user = users.find(user => user.id === userSelected)

  return (
   <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Personality</th>
            <th>Vehicle</th>
            <th>Bio</th>
          </tr>
          <tr>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.adj}</td>
            <td>{user.vehicle}</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>
  )

}

export default UserInformation;
