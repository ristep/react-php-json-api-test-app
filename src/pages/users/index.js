import React from "react";
import { Card, Table } from "react-bootstrap";
import { useQuery } from 'react-query'

import Axios from "Axios";
import { Link, useParams } from "react-router-dom";
import NaviList from "components/naviList";
import Spinner from "components/spinner";

const PAGE_SIZE = 5;
// const DT = 250;
const BaseUrl = "#/users/";

const usersListQuery = (search, pgSize, offset) => ({
  MetaList: {
    "type": "users",
    "attributes": [
      "id",
      "name",
      "first_name",
      "second_name",
      "address",
      "place",
      "state",
      "role",
      "email"
    ],
    filter: {
      template: "name like :par1 or first_name like :par2",
      params: {
        par1: "%" + search + "%",
        par2: "%" + search + "%"
      }
    },
    page: {
      limit: pgSize,
      offset: offset
    }
  }
});

const Users = () => {
  const { size = PAGE_SIZE, page = 0, search = '' } = useParams();

  const { isLoading, isSuccess, isFetching, error, data } = useQuery(['usersListQuery', { size, page, search }],
    () => Axios.post("", usersListQuery(search, size, page * size))
      .then((ret) => ret.data)
  );

  return (
    <>
    <Card>
      <NaviList baseUrl={BaseUrl} cnt={data ? data.recordCount : 0} page={page} size={size} search={search}></NaviList>
    </Card>
      {(isLoading || isFetching) && <Spinner></Spinner>}

      {error && <div>{'An error has occurred: ' + error.message}</div>}

      {isSuccess && !error && !(isLoading || isFetching) &&
        <Card>
          <Card.Body>
            <Card.Title>
              <h3>Users table</h3>
            </Card.Title>
            <Card.Text>

              <Table striped bordered hover table-responsive>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Login Name</th>
                    <th>Real Name</th>
                    <th>e-mail</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((value, index) =>
                    <tr key={index}>
                      <td>
                        <Link to={"/user/" + value.id}>{value.id}</Link>
                      </td>
                      <td>
                        <Link to={"/user/" + value.id}>{value.name}</Link>
                      </td>
                      <td>
                        {value.first_name} {value.second_name}
                      </td>
                      <td>
                        {value.email}
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      }
    </>
  );
}

export default Users;