import React, { useState, useEffect, useTransition } from "react";

const ListComponent = ({ item }) => {
  return <div>{item.title}</div>;
};

const TransitionExample2 = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    setName(st => {
      console.log('INSIDE INPUT STATE')
      return e.target.value
    });
    startTransition(() => {
      console.log('INSIDE TRANSITION')
      setList(list.filter((item) => item.title.includes(e.target.value)));
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      startTransition(() => {
        setList(data);
      });
    };
    console.log('USE EFFECT')
    fetchData();
  }, []);

  console.log('TRANSITION EXAMPLE 2 RENDER', list)
  return (
    <>
      <p
        style={{
          color: "red"
        }}
      >
        Effect will visible for large array upto 2000 size (State change of
        input and list will be reflected late together)
      </p>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Search items"
      />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item) => <ListComponent key={item.id} item={item} />)
      )}
    </>
  );
};

export default TransitionExample2;