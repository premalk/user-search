import { array } from "prop-types";

// eslint-disable-next-line react/prop-types
const UserTable = ({ data }) => {
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Picture</th>
            <th>View more details</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            // eslint-disable-next-line react/prop-types
            data.map((user) => {
              const { name, email, company_name, phone1 } = user;
              return (
                <tr key={phone1}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{company_name}</td>
                  <td>
                    <img src="" />
                  </td>
                  <td>
                    <button>Additional images</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

UserTable.prototypes = {
  data: array
};

export default UserTable;
