import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const HomePageFetch = ({ artistName }) => {
  const [data, setData] = useState([]);
  const [artista, setArtista] = useState(artistName);
  const selector = useSelector((state) => {
    return state.music.search;
  });

  useEffect(() => {
    debugger;
    setArtista(selector !== "" ? selector : artistName);
  }, [selector]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artista}`, {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        });
        if (response.ok) {
          let dataRisposta = await response.json();
          const taglio = dataRisposta.data.slice(0, 5);
          setData(taglio);
        } else {
          throw new Error("Errore");
        }
      } catch (err) {
        console.log("errore", err);
      }
    };

    fetchData();
  }, [artista]);

  return (
    <>
      {data.map((e, i) => (
        <AlbumCard key={i} data={e} />
      ))}
    </>
  );
};

export default HomePageFetch;
