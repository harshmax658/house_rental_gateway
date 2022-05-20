import React from "react";
import Card from "../Card/Card";
import { HouseList, HouseCards, Center } from "./HouseCardStyle";

const HouseCard = () => {
  return (
    <HouseList>
      <Center>
        <HouseCards>
          <Card />
        </HouseCards>
        <HouseCards>
          <Card />
        </HouseCards>
        <HouseCards>
          <Card />
        </HouseCards>
        <HouseCards>
          <Card />
        </HouseCards>
        <HouseCards>
          <Card />
        </HouseCards>
      </Center>
    </HouseList>
  );
};

export default HouseCard;
