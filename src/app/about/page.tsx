import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const About = async () => {
  const res = await getData();
  return (
    <div>
      body:
      {res?.map((e: any) => {
        <p>{e?.title}</p>;
      })}
    </div>
  );
};

export default About;
