import { createMiddleware } from "seyfert";

// The generic type tells the middleware what information it will pass to the command
export default createMiddleware<void>((middle) => {
  if (!middle.context.member?.roles.values.includes("1213443887495118879")) return middle.stop("you are NOT a reviewer")

  return middle.next();
}
);