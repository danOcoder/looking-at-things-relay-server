import { RequestHandler } from "express";
import { createApi } from "unsplash-js";
import nodeFetch from "node-fetch";

const accessKey = process.env.ACCESS_KEY;

const unsplash = createApi({
  accessKey: accessKey as string,
  fetch: nodeFetch,
  //...other fetch options
});

export const randomImg: RequestHandler = async (_, res) => {
  unsplash.photos.getRandom({}).then((result) => {
    if (result.errors) {
      console.log("error occurred: ", result.errors[0]);
    } else {
      res.send(result);
    }
  });
};
