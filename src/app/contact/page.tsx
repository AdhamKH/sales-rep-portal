import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Contact = async () => {
  const res = await getData();
  console.log("res in contact", res);

  return <div>body Contact{res?.title}</div>;
};

export default Contact;
