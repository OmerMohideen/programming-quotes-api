import Router from "koa-router";
import path from "path";
import data from "../../data.json";
const router = new Router();
import { StatusCodes } from "http-status-codes";

router.get(
  `/${path.basename(__filename, path.extname(__filename))}`,
  async (ctx) => {
    const {
      query: { author },
    } = ctx.request;
    if (!author) {
      ctx.response.status = StatusCodes.OK;
      ctx.body = data[Math.floor(Math.random() * (data.length - 0) + 0)];
      return;
    }
    var matched = data.filter(function (quote) {
      return quote.author
        .toLowerCase()
        .startsWith(author.replace("+", " ").toLowerCase());
    });
    ctx.response.status = StatusCodes.OK;
    ctx.body = matched[Math.floor(Math.random() * (matched.length - 0) + 0)];
  }
);

export default router.routes();
