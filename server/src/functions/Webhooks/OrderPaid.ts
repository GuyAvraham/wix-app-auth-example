import { parseWixWebhookEvent } from "../../common/parseWixWebhookEvent";
import { internalErrorResponse, validResponse } from "../../common/responses";
import { OrderPaidObject, OrderPaidType } from "../../common/types";

export async function OrderPaid(event) {
  const orderPaidObject = await parseWixWebhookEvent<OrderPaidObject>(
    event,
    []
  );
  if (!orderPaidObject.success || !orderPaidObject.body) {
    if (orderPaidObject.message === "Lambda is warm")
      return validResponse({
        message: orderPaidObject.message,
        success: orderPaidObject.success,
      });

    return internalErrorResponse({
      message: {
        content: orderPaidObject.message,
        success: orderPaidObject.success,
      },
    });
  }

  let orderPaid: OrderPaidType;
  try {
    orderPaid = JSON.parse(orderPaidObject.body.data as string);
  } catch (e) {
    orderPaid = orderPaidObject.body.data as OrderPaidType;
  }

  console.log("ORDER PAID WEBHOOK INFO", { orderPaid });

  return validResponse({ success: true });
}
