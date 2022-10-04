// 'useState' is defined but never used.eslint@typescript-eslint/no-unused-vars
import file from "./file";
import React, { useState, useEffect } from "react";

const x = 3;

function App() {
  // Unexpected let, use const instead.eslintfunctional/no-let
  let x = 3;

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
