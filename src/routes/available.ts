import Router from "koa-router";
import path from "path";
import data from "../../data.json";
import { StatusCodes } from "http-status-codes";
const router = new Router();
import cors from "@koa/cors";

router.get(
  `/${path.basename(__filename, path.extname(__filename))}`, cors(),
  async (ctx) => {
    const {
      query: { author },
    } = ctx.request;
    if (!author) {
      ctx.response.status = StatusCodes.OK;
      ctx.body = data.length;
      return;
    }
    var matched = data.filter(function (quote) {
      return quote.author
        .toLowerCase()
        .startsWith(author.replace("+", " ").toLowerCase());
    });
    ctx.response.status = StatusCodes.OK;
    ctx.body = matched.length;
  }
);

export default router.routes();
