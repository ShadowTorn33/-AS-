import React from "react";
import { useState, useEffect } from "react";

const Related = () => {
  const [related, setRelated] = useState([]);
  console.log();

  const fetchRelated = () => {
    fetch(`https://sports.api.decathlon.com/sports/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("hi", res.data);
        setRelated(res.data);
      });
  };

  useEffect(() => {
    setRelated();
  }, []);

  return <></>;
};

export default Related;
