import nc from "next-connect";
import dbConnect from "./DBConnect";
import { verifyToken } from "../Controllers/MiddlewareController";

function onError(err, req, res, next) {
  console.error(err);
  res.status(500).end(err.toString());
}

function noMatchRoute(req, res) {
  req.status(404).send("page is not found");
}

const handler = nc({
  onError: onError,
  onNoMatch: noMatchRoute,
  attachParams: true,
}).use(dbConnect);

export default handler;

const protectedHandler = nc({
  attachParams: true,
  onNoMatch: noMatchRoute,
  onError: onError,
})
  .use(dbConnect)
  .use(verifyToken);

export { protectedHandler };
