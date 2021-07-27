import Axios from 'Axios';
import React from 'react';
import { useMutation } from 'react-query';

const userUpdateQuery = (data) => (
  {
    "Update": {
      "type": "users",
      "id": data.id,
      "attributes": data.attributes,
    }
  });

function UpdateUser(props) {
  const { updData } = props;
  const mutation = useMutation(() => Axios.post('', userUpdateQuery(updData)));

  return (
    <div>
      {mutation.isLoading ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: 'Do Laundry' })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}

export default UpdateUser;