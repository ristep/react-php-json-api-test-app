import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Axios from "Axios";
import { useParams } from "react-router-dom";
import FoodCard from "components/foodCard";
import Spinner from "components/spinner";
import NaviList from "components/naviList";

const PAGE_SIZE = 5;
const DT = 250;
const BaseUrl = "#/foods/"

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

const Foods = () => {
  const { size = PAGE_SIZE, page = 0, search = '' } = useParams();
  const [result, setResult] = useState({ OK: false, count: 0, data: [] });
  const [ spin, setSpin ] = useState(true);

  const location = (ps, pg, sr) => {
    window.location.replace(BaseUrl + ps + "/" + pg + "/" + sr);
  }

  useEffect(() => {
    const dt = DT;
    setSpin(true)
    const timer = setTimeout(() => {
      (async () => {
        await Axios.post("", foodListQuery(search, size, page * size)).then((ret) => {
          if (ret.data.OK) {
            setResult(ret.data);
            setSpin(false);
            if (page * size > result.recordCount)
              location(size, 0, search);
          }
        });
      })();
    }, dt);
    return () => clearTimeout(timer);
  }, [page, search, size, result.recordCount]);

  return (
    <>
      <NaviList baseUrl={BaseUrl} cnt={result ? result.recordCount : 0 } page={page} size={size} search={search}></NaviList>

      <Container className="food-list-container card-columns card-columns-2 card-columns-md-3 card-columns-xl-4">
      <Spinner rotate={spin}></Spinner>

        {result.data.map((variant, idx) => (
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

      </Container>
    </>
  );

}

export default Foods;