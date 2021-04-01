import React, { createContext, useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [updateBtnData, setUpdateBtnData] = useState("");
  const [search, setSearch] = useState("turkey");
  const [sideCard, setSideCard] = useState([]);
  const [headers, setHeaders] = useState("General");
  //const [sideCardData, setSideCardData] = useState({});
  const [categoryName] = useState([
    "general",
    "entertainment",
    "science",
    "sports",
    "health",
    "business",
    "technology",
  ]);

  const getCategoryButtons = (btnData) => {
    setUpdateBtnData(btnData);
    setHeaders(btnData);
  };

  const getSearchResults = (searchResults) => {
    setSearch(searchResults);
    setHeaders(searchResults);
  };
  //SideBar

  useEffect(() => {
    const sidebar = async () => {
      await fetch(
        `https://newsapi.org/v2/everything?q=global&sortBy=popularity&apiKey=${API_KEY}`
      )
        .then((getData) => getData.json())
        .then((res) => {
          setSideCard(res.articles);
        });
    };
    sidebar()
    
  }, []);
  //Seacrh
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${search}&language=tr&sortBy=popularity&apiKey=${API_KEY}`
    )
      .then((getData) => getData.json())
      .then((res) => setData(res.articles))
      .catch((err) => console.log(err));
  }, [search]);
  //Default and Category Buttons

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=tr&category=${updateBtnData}&apiKey=${API_KEY}`
    )
      .then((getData) => getData.json())
      .then((res) => setData(res.articles));
  }, [updateBtnData]);

  return (
    <NewsContext.Provider
      value={{
        data,
        categoryName,
        updateBtnData,
        headers,
        sideCard,
        getCategoryButtons,
        getSearchResults,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
export default NewsContextProvider;
