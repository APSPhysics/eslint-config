// 'useState' is defined but never used.eslint@typescript-eslint/no-unused-vars
import file from "./file";
import React, { useState, useEffect } from "react";

let x = 3;

const env = import.meta.env.VITE_PUBLIC_SECRET_EXAMPLE;

console.info(env);

// @ts-expect-error: Error with this code
x = false;

// @ts-ignore
function App() {
  // Unexpected let, use const instead.eslintfunctional/no-let
  let x = 3;

  console.log("test");

  useEffect(() => {
    console.log(x);
  }, []);

  var hello;

  // Unexpected console statement.eslintno-console
  console.log(file);
  // warn and error is fine
  console.warn("Warning!");
  console.error("oops");

  return (
    <div>
      <header>
        <h1>Test App for Eslint Config</h1>
      </header>
    </div>
  );
}

export default App;
