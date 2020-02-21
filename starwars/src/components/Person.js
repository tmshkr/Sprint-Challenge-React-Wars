import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import "./Person.scss";

function Person(props) {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    birth_year,
    gender,
    films
  } = props.data;

  const [showFilms, setDisplayFilms] = useState(false);
  // eslint-disable-next-line
  const [filmsData, _] = useState([]);
  const [filmsLoaded, setFilmsLoaded] = useState(false);

  useEffect(() => {
    if (showFilms) {
      films.forEach(f => {
        axios.get(f).then(({ data }) => {
          filmsData.push(data.title);
          if (filmsData.length === films.length) {
            setFilmsLoaded(true);
          }
        });
      });
    }
    // eslint-disable-next-line
  }, [showFilms]);

  return (
    <Card className="person">
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Height:</td>
                <td>{height}cm</td>
              </tr>
              <tr>
                <td>Mass:</td>
                <td>{mass}kg</td>
              </tr>
              <tr>
                <td>Hair:</td>
                <td>{hair_color}</td>
              </tr>
              <tr>
                <td>Skin:</td>
                <td>{skin_color}</td>
              </tr>
              <tr>
                <td>Birth Year:</td>
                <td>{birth_year}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {!showFilms && (
          <Button color="info" onClick={() => setDisplayFilms(true)}>
            List {films.length} Films
          </Button>
        )}
        {filmsLoaded && (
          <div>
            <h4>Appears in</h4>
            <ul>
              {filmsData.map(title => (
                <li key={title}>{title}</li>
              ))}
            </ul>
          </div>
        )}
      </CardBody>
    </Card>
  );
}

export default Person;
