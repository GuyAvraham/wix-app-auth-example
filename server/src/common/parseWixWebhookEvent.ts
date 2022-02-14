import { ParseEventReturnValue } from "./types";
import { verify } from "jsonwebtoken";

export async function parseWixWebhookEvent<T>(
  event,
  dependentKeys: string[]
): Promise<ParseEventReturnValue<T>> {
  // if (event.source === "serverless-plugin-warmup") {
  //   console.log("WarmUp - Lambda is warm!");
  //    return {success: true, message: "Lambda is warm"}
  // }

  let body;

  try {
    if (!event.body && event.queryStringParameters) {
      body = event.queryStringParameters;
    } else {
      body = JSON.parse(event.body);
    }
  } catch (e) {
    return { success: false, message: "Invalid JSON" };
  }

  console.log({ body });
  if (!body) return { success: false, message: "Invalid JSON" };

  let success = true;

  dependentKeys.forEach((key) => {
    if (!body.hasOwnProperty(key)) {
      success = false;
    }
  });

  if (!success) return { success: false, message: "Missing Keys" };

  if (!process.env.WIX_PUBLIC_KEY) {
    console.log("MISSING WIX PUBLIC KEY");
    return { success: false, message: "Missing Keys" };
  }

  const PUBLICKEY = process.env.WIX_PUBLIC_KEY.replace(/\\n/gm, "\n");

  let jwtDecoded;
  success = true;
  await verify(event.body, PUBLICKEY, function (err, decoded) {
    if (err) {
      success = false;
      return;
    }
    jwtDecoded = decoded;
  });

  if (!success) return { success: false, message: "Invalid Token" };

  const data = JSON.parse(jwtDecoded.data);

  return { success: true, body: data, message: "" };
}
