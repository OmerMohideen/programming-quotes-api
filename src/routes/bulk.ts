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
      ctx.body = getRandom(data, 10);
      return;
    }
    var matched = data.filter(function (quote) {
      return quote.author
        .toLowerCase()
        .startsWith(author.replace("+", " ").toLowerCase());
    });
    let count = 10;
    if (matched.length < 10) count = matched.length;
    ctx.response.status = StatusCodes.OK;
    ctx.body = getRandom(matched, count);
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
