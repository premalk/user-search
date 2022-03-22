import { useState } from "react";

import UserTable from "../../components/UserTable";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";

import useQuery from "../../hooks/useQuery";
import useTable from "../../hooks/useTable";

const Users = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  //const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery();
  const { slice, range } = useTable(users, page);

  const filterSearch = (value) => {
    if (!value) setUsers([]);
    else {
      const filteredList = data.filter((obj) => {
        return obj.name.indexOf(value) !== -1;
      });
      setUsers([...filteredList]);
    }
  };

  const callback = (value) => {
    filterSearch(value);
  };

  return (
    <div className="container">
      <Search callback={callback} />
      <UserTable data={slice} />
      <Pagination range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default Users;
