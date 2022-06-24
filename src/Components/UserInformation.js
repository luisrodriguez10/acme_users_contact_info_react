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

// class UserInformation extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: {},
//     };
//   }

//   async componentDidMount() {
//     const response = await axios.get(`/api/users/${this.props.userSelected}`);
//     const user = response.data;
//     this.setState({ user });
//   }

  

//   render() {
//     const { user } = this.state;
    
//     return (
//       <table>
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Adjective</th>
//             <th>Vehicle</th>
//             <th>Bio</th>
//           </tr>
//           <tr>
//             <td>{user.name}</td>
//             <td>{user.phone}</td>
//             <td>{user.email}</td>
//             <td>{user.adj}</td>
//             <td>{user.vehicle}</td>
//             <td>{user.bio}</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }

export default UserInformation;
