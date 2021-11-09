export async function parseEvent(event, dependentKeys: string[]) {
  let body;

  try {
    if (!event.body && event.queryStringParameters) {
      body = event.queryStringParameters;
    } else {
      body = JSON.parse(event.body);
    }
  } catch (e) {
    throw Error("Invalid JSON");
  }

  dependentKeys.forEach((key) => {
    if (!body[key]) {
      throw Error(`missing ${key} in event body`);
    }
  });

  return body;
}
