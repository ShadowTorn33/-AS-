import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const Leagues = () => {
  const [leagues, setLeageus] = useState([]);

//   const fetchLeagues = () => {
//     fetch("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php")
//       .then((res) => res.json())
//       .then((res) => {
//         setLeageus(res.leagues);
//       });
//   };

//   useEffect(() => {
//     fetchLeagues();
//   }, []);

  return (
    <>
    <h1>hi</h1>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {leagues.map((league, index) => {
            return (
              <tr key={index}>
                <td>{league.index}</td>
                <td>{league.strSport}</td>
                <td>{league.strLeague}</td>
                <td>{league.strLeagueAlternate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
    </>
  );
};

export default Leagues;
