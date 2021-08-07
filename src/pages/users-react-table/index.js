import React from "react";
import Axios from "Axios";
import { useQuery } from 'react-query'

import { Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import NaviList from "components/naviList";
import Spinner from "components/spinner";
import { useSortBy, useTable } from "react-table";

const PAGE_SIZE = 15;
// const DT = 250;
const BaseUrl = "#/users-react-table/";

const usersListQuery = (search, pgSize, offset) => ({
  MetaList: {
    "type": "users",
    "attributes": [
      "id",
      "name",
      "first_name",
      "second_name", 
      "address",
      "email",
      "place"
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

const UsersTable = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    },
    useSortBy
  );  

  // Render the UI for your table
  return (
    <table  className='table01' {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                </span>
              </th>
            ))}
          </tr> 
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell,key) => {
                return( 
                  <td {...cell.getCellProps()} key={key} className={cell.column.aligned}>
                    { cell.column.link ?
                      <Link to={"/user/" + row.original.id}>{cell.value}</Link>
                    :
                      <span>{cell.value}</span>
                    }
                </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const UsersReactTable = () => {
  const { size = PAGE_SIZE, page = 0, search = '' } = useParams();
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'List of users',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
            aligned: 'right',
            link: true,
          },
          {
            Header: 'User name',
            accessor: 'name',
            aligned: 'center',
            link: true,
          },
          {
            Header: 'First name',
            accessor: 'first_name',
          },
          {
            Header: 'Second name',
            accessor: 'second_name',
          },
          {
            Header: 'e-mail',
            accessor: 'email',
            link: true,
          },
          {
            Header: 'Place',
            accessor: 'place',
          },
        ],
      },
    ],
    []
  );

  const { isLoading, isSuccess, isFetching, error, data } = useQuery(['usersListQuery', { size, page, search }],
    () => Axios.post("", usersListQuery(search, size, page * size))
      .then((ret) => ret.data)
  );

  return (
    <Container>
    <Card className="tableCard">
      <NaviList baseUrl={BaseUrl} cnt={data ? data.recordCount : 0} page={page} size={size} search={search}></NaviList>
    </Card>
      {(isLoading || isFetching) && <Spinner></Spinner>}

      {error && <div>{'An error has occurred: ' + error.message}</div>}

      {isSuccess && !error && !(isLoading || isFetching) &&
        <Card className={'tableCard'}>
          <Card.Body>
            <Card.Text>

            <UsersTable columns={columns} data={data.data} />

            </Card.Text>
          </Card.Body>
        </Card>
      }
    {/* <ReactJson src={data} /> */}
    </Container>
  );
}

export default UsersReactTable;