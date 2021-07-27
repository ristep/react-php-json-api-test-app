import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'

import Axios from "Axios";
import { Card, Container } from "react-bootstrap";
import Spinner from "components/spinner";

const foodDetailQuery = (id) => (
  {
    "Get": {
      "type": "foods",
      "id": id,
      "attributes": [
        "id", "name", "description", "name_scientific", "wikipedia_id", "food_group", "food_subgroup", "food_type", "public_id", "picture_url"
      ],
    }
  });

const Food = () => {
  const { foodID } = useParams();

  const { isLoading, error, data, isSuccess, isFetching } = useQuery([ 'foodDetailQuery', foodID ], () =>{
    return Axios.post("", foodDetailQuery(foodID)).then( res => { 
      return res.data.data 
    });
  });

  if (isLoading || isFetching ) return <Spinner></Spinner>;
  
  if (error) return 'An error has occurred: ' + error.message;
  
  if(isSuccess)
  return (
    <Container>
    <Card className="food-card">
      <Card.Body>
        <Card.Title><h2>{data.name}</h2></Card.Title>
        <Card.Img src={Axios.defaults.baseURL + data.picture_url } />
        <Card.Text component={'span'}>
          <dl className="row">

            <dt className="col-sm-2">Public id:</dt>
            <dd className="col-sm-10">{data.public_id}</dd>

            <dt className="col-sm-2">Scientific name:</dt>
            <dd className="col-sm-10">{data.name_scientific}</dd>

            <dt className="col-sm-2">Description:</dt>
            <dd className="col-sm-10">{data.description}</dd>

            <dt className="col-sm-2">Group:</dt>
            <dd className="col-sm-10">{data.food_group}</dd>

            <dt className="col-sm-2">Subgroup:</dt>
            <dd className="col-sm-10">{data.food_subgroup}</dd>

          </dl>
        </Card.Text>
       
      </Card.Body> 
      <Card.Footer style={{ width: '100%' }}>
        <a href={"https://en.wikipedia.org/wiki/" + data.wikipedia_id}>Wikipedia</a>
        <a className="float-right" href={"#/food/" + data.id}>{data.id} - {data.name}</a>
      </Card.Footer>
    </Card>
    </Container>
  );
  else
    return <Card>Uoooops</Card>;
};

export default Food;