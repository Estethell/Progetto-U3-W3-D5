import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AlbumCard from "./AlbumCard";

const SearchComponent = () => {
  const searchQuery = useSelector((state) => {
    return state.music.search;
  });
  const [artists, setArtits] = useState();

  const searchFetch = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch della ricerca artista");
        }
      })
      .then((data) => {
        setArtits(data);
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  useEffect(() => {
    SearchComponent();
  }, [searchQuery]);
  return <AlbumCard artists={artists} />;
};
