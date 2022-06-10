import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = () => {
  const [wordData, setWordData] = useState();
  const wordsUrl =
    "https://gist.githubusercontent.com/f/9c59c515fca028b549a6014aa43c14b0/raw/8253074695e0777b97b6be5e96b6c51f645337ae/all-hex-words.json";
  const getWordsList = () => {
    axios
      .get(wordsUrl)
      .then(function (response) {
        const { data } = response;
        const filter = data.filter((x) => [3, 6, 8].includes(x[0].length));
        setWordData(filter);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getWordsList();
  }, []);
  return (
    <>
      <Wrapper>
        {wordData?.map((item) => (
          <Card color={item[1]} hex={item[1]} words={item[0]} />
        ))}
      </Wrapper>
    </>
  );
};

export default CardList;
