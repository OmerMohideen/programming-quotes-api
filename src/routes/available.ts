import Router from "koa-router";
import path from "path";
import data from "../../data.json";
const router = new Router();
import { getReasonPhrase, StatusCodes } from "http-status-codes";

router.get(
  `/${path.basename(__filename, path.extname(__filename))}`,
  async (ctx) => {
    ctx.response.status = StatusCodes.OK;
    ctx.body = data.length;
  }
);

router.get(
  `/${path.basename(__filename, path.extname(__filename))}/author`,
  async (ctx) => {
    const {
      query: { name },
    } = ctx.request;

    if (!name) {
      ctx.response.status = StatusCodes.BAD_REQUEST;
      ctx.body = { error: getReasonPhrase(StatusCodes.BAD_REQUEST) };
      return;
    }
    var matched = data.filter(function (quote) {
      return quote.author
        .toLowerCase()
        .startsWith(name.replace("+", " ").toLowerCase());
    });
    ctx.response.status = StatusCodes.OK;
    ctx.body = matched.length;
  }
);

export default router.routes();
