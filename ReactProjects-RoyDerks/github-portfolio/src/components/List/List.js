import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightGrey;
  width:100%
`;

const List = ({ items, title }) => (
  <>
    <ol className="Profile-info">
      <Title> {title} </Title>
      {items.map((item, index) => (
        <li key={index}><strong>{item.label}</strong> - {item.value}</li>
      ))}
    </ol>
  </>
);

export default List;
