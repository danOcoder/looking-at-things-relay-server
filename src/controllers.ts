import type { RequestHandler } from "express";

import { createApi } from "unsplash-js";
import nodeFetch from "node-fetch";
import { DUMMY_RESULT } from "./constants";

const accessKey = process.env.ACCESS_KEY;

const unsplash = createApi({
  accessKey: accessKey as string,
  fetch: nodeFetch,
  //...other fetch options
});

export const random: RequestHandler = (req, res) => {
  const { count, query } = req.query;

  unsplash.photos
    .getRandom({
      count: Number(count),
      orientation: "squarish",
      query: query as string,
    })
    .then((result) => {
      if (result.type === "error") {
        // TODO: handle error – Sentry?
        console.error("error occurred: ", result.errors[0]);

        res.send(DUMMY_RESULT);
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      // TODO: handle error – Sentry?
      console.error(error);

      res.send(DUMMY_RESULT);
    });
};
