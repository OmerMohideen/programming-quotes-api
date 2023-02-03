import Koa from "koa";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import bulk from "./routes/bulk";
import random from "./routes/random";
import available from "./routes/available";
import { RateLimit } from "koa2-ratelimit";
import { getReasonPhrase, StatusCodes } from "http-status-codes";

require("dotenv").config();
const port = process.env.PORT || 2000;
const app = new Koa();
const limiter = RateLimit.middleware({
  message: JSON.stringify({
    status: StatusCodes.TOO_MANY_REQUESTS,
    error: getReasonPhrase(StatusCodes.TOO_MANY_REQUESTS),
  }),
  interval: { hour: 1 },
  delayAfter: 2,
  timeWait: 3,
  max: 100,
});

app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(random);
app.use(available);
app.use(bulk);
app.listen(port, () => console.log(`Server is running on ${port}`));
