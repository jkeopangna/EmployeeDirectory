import React, { Component } from "react";
import API from "../utils/API";


class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        };
    }

    componentDidMount() {

        API.fetchUsers().then(results => {
            console.log(results);
            return results.data.results;
        }).then(users => {
            this.setState({
                users: users
            })
            });
        }

        handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }


render() {
return (

<table className="table table-dark table-hover">
          <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Profile</th>
      <th scope="col">D.O.B.</th>
    </tr>
     </thead>
      <tbody>
        {this.state.users.map((user, index) => {
           console.log(user)
            return (

                <tr key={index}>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td><img src={user.picture.thumbnail}/></td>
                <td>{user.dob.date}</td>
                </tr>
            )
       })
       }
      </tbody>
</table>
         
)};
};

  
export default Table;