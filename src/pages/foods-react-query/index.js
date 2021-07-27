import React from "react";
import { Container } from "react-bootstrap";

import Axios from "Axios";
import { useParams } from "react-router-dom";
import FoodCard from "components/foodCard";
import { useQuery } from "react-query";
import NaviList from "components/naviList";
import Spinner from "components/spinner";

const PAGE_SIZE = 5;
const BaseUrl = "#/foods-react-query/"

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

const FoodsRQ = () => {
  const { size = PAGE_SIZE, page = 0, search = '' } = useParams();
  
  const { isLoading, isSuccess, isFetching, error, data } = useQuery(['foodListQuery', size, page, search ],
    () => Axios.post("", foodListQuery(search, size, page * size))
      .then((ret) => ret.data )
  );

  return (
    <>
      <NaviList baseUrl={BaseUrl} cnt={data ? data.recordCount : 0 } page={page} size={size} search={search}></NaviList>
      <h3 style={{textAlign: 'center'}}>Food list whith React-Query</h3>

      {(isLoading || isFetching) && <Spinner></Spinner> }

      { error && <div>{'An error has occurred: ' + error.message}</div> }

      { isSuccess && !error && !( isLoading || isFetching ) &&
        <Container className="food-list-container">

          {data.data.map((variant, idx) => (
            <FoodCard key={idx}>{{
              id: variant.id,
              publicId: variant.public_id,
              name: variant.name,
              imgUrl: Axios.defaults.baseURL + variant.picture_url,
              nameScientific: variant.name_scientific,
              foodGroup: variant.food_group,
              foodSubgroup: variant.food_subgroup
            }}</FoodCard>
          ))}

        </Container>}
    </>
  );

}

export default FoodsRQ;