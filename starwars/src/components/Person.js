import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
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
      </CardBody>
    </Card>
  );
}

export default Person;
