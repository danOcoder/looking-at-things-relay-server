import type { RequestHandler } from "express";

import { createApi } from "unsplash-js";
import nodeFetch from "node-fetch";

const accessKey = process.env.ACCESS_KEY;

const dummyResult = {
  result: {
    response: [],
  },
};

const unsplash = createApi({
  accessKey: accessKey as string,
  fetch: nodeFetch,
  //...other fetch options
});

export const randomImg: RequestHandler = (req, res) => {
  const { count } = req.query;

  unsplash.photos
    .getRandom({
      count: Number(count),
    })
    .then((result) => {
      if (result.type === "error") {
        // TODO: handle error – sentry?
        console.error("error occurred: ", result.errors[0]);

        res.send(dummyResult);
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      // TODO: handle error – sentry?
      console.error(error);

      res.send(dummyResult);
    });
};
