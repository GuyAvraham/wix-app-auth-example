import { ParseEventReturnValue } from "./types";

export async function parseEvent<T>(
  event,
  dependentKeys: string[]
): Promise<ParseEventReturnValue<T>> {
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

  return { success: true, body, message: "" };
}
