import Router from "koa-router";
import path from "path";
import data from "../../data.json";
const router = new Router();
import { getReasonPhrase, StatusCodes } from "http-status-codes";

router.get(
  `/${path.basename(__filename, path.extname(__filename))}`,
  async (ctx) => {
    const randoms = getRandom(data, 10);
    ctx.response.status = StatusCodes.OK;
    ctx.body = randoms;
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
    let count = 10;
    if (matched.length < 10) count = matched.length;
    const randoms = getRandom(matched, count);
    ctx.response.status = StatusCodes.OK;
    ctx.body = randoms;
  }
);

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default router.routes();
