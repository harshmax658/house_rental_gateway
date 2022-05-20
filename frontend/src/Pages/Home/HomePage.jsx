import React, { useState } from "react";
import {
  Homepage,
  PostImage,
  CenterBox,
  H2,
  P,
  TransDiv,
  InSearch,
} from "./HomePage_style";

const HomePage = () => {
  const { search, setSearch } = useState();

  const SearchData = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Homepage>
      <PostImage>
        <CenterBox>
          <section>
            <H2>Properties to buy in Delhi</H2>
            <P className="shad">Yahan Search Khatam Karo</P>
            <TransDiv>
              <div>
                <P>Search your dream house</P>
                <InSearch>
                  <input type="text" value={search} onChange={SearchData} />
                  <button>Search</button>
                </InSearch>
              </div>
            </TransDiv>
          </section>
        </CenterBox>
      </PostImage>
    </Homepage>
  );
};

export default HomePage;
