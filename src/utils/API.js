import axios from "axios";

// export default {
//     fetchUsers: function() {
//         return axios
//         .get('https://randomuser.me/api/?results=10&nat=us')
//         .then(res => {
//             const users = res.data.results;
//             return users.map(user => {
//                 console.log(res.data.results);
//                 return [
//                     {
//                         results: [
//                             {
//                               name: {
//                                 first: "",
//                                 last: ""
//                               },
//                               email: "brad.gibson@example.com",
//                               dob: {
//                                 date: "1993-07-20T09:44:18.674Z",
//                               },
//                               phone: "011-962-7516",
//                               cell: "081-454-0666",
//                               picture: {
//                                 thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//                               }
//                             }
//                           ],
//                     }
//                 ]
//             });
//         });
//     } 
// };

export default {
    fetchUsers: function() {
      return axios.get("https://randomuser.me/api/?results=10&nat=us");
    }
  };