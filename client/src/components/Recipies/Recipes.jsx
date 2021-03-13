import React, { useEffect } from "react";
import axios from "axios";

export default function Recipes() {
  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/716429/information?includeNutrition=false"
      )
      .then((res) => {
        console.log("res :>> ", res);
      });
  });

  return <div></div>;
}
