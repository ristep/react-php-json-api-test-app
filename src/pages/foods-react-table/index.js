import React from "react";
import { Card, Image, Table } from "react-bootstrap";

import Axios from "Axios";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import NaviList from "components/naviList";
import Spinner from "components/spinner";
import { useSortBy, useTable } from "react-table";

const PAGE_SIZE = 5;
const BaseUrl = "#/foods-react-table/"

const foodListQuery = (search, pgSize, offset) => ({
  MetaList: {
    type: "foods",
    attributes: [
      "id", "name", "description", "name_scientific", "wikipedia_id", "food_group", "food_subgroup", "food_type", "public_id", "picture_url"
    ],
    filter: {
      template: "name like :par1 or name_scientific like :par2",
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

const onRowClick = (row) => {
  window.location = '#/food/' + row.id;
}

const linkSwitch = (cell) => {
  switch (cell.column.id) {
    case "id":
      return <Link to={"/food/" + cell.value}>{cell.value}</Link>
    case "wikipedia_id":
      return <a href={"https://en.wikipedia.org/wiki/" + cell.value} target="_blank" rel="noreferrer">{cell.value}</a>;
    case "picture_url":
      return <Image src={ Axios.defaults.baseURL + cell.value} style={{ maxWidth: '60px', maxHeight: '60px' }} />
    default:
      return <span>{cell.value}</span>  
  } 
} 

const FoodsTable = ({ columns, data }) => {
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
    <Table striped hover table-responsive {...getTableProps()} size="sm">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table-header">
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
            <tr {...row.getRowProps()} onClick={() => onRowClick(row.original)}>
              {row.cells.map((cell,key) => {
                return( 
                  <td {...cell.getCellProps()} key={key} className={cell.column.aligned}>
                      {linkSwitch(cell)}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

const FoodsReactTable = () => {
  const { size = PAGE_SIZE, page = 0, search = '' } = useParams();
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Food list whith react-query and react-table',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
            aligned: 'right',
            link: true,
          },
          {
            Header: 'Name',
            accessor: 'name',
            sortable: true,
          },
          {
            Header: 'Scientific name',
            accessor: 'name_scientific',
            link: true,
          },
          {
            Header: 'Food gropup',
            accessor: 'food_group',
          },
          {
            Header: 'Food Subgroup',
            accessor: 'food_subgroup',
          },
          {
            Header: 'Wikipedia',
            accessor: 'wikipedia_id',
          },
          { Header: 'Picture',
            accessor: 'picture_url',
            ortable: true,
          }  
        ],
      },
    ],
    []
  );

  const { isLoading, isSuccess, isFetching, error, data } = useQuery(['foodListQuery', size, page, search ],
    () => Axios.post("", foodListQuery(search, size, page * size))
      .then((ret) => ret.data )
  );

  return (
    <Card  className='tableCard'>
      <NaviList baseUrl={BaseUrl} cnt={data ? data.recordCount : 0 } page={page} size={size} search={search}></NaviList>

      {(isLoading || isFetching) && <Spinner></Spinner> }

      { error && <div>{'An error has occurred: ' + error.message}</div> }

      { isSuccess && !error && !( isLoading || isFetching ) &&
          <FoodsTable columns={columns} data={data.data} />
      }
    </Card>  
  );

}

export default FoodsReactTable;