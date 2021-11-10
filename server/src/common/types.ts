export type OrderType = "OrderPaid";

export interface WixOAuthRequestType {
  code: string;
  state: string;
  instanceId: string;
}

export interface ParseEventReturnValue<T> {
  success: boolean;
  message: string;
  body?: T;
}
export interface BuyerInfo {
  id: string;
  type: string;
  identityType: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface Totals {
  subtotal: string;
  shipping: string;
  tax: string;
  discount: string;
  total: string;
  weight: string;
  quantity: number;
}

export interface FullName {
  firstName: string;
  lastName: string;
}

export interface Street {
  number: string;
  name: string;
}

export interface Address {
  fullName: FullName;
  country: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  street: Street;
}

export interface BillingInfo {
  paymentMethod: string;
  paymentGatewayTransactionId: string;
  address: Address;
  paidDate: Date;
}

export interface FullName2 {
  firstName: string;
  lastName: string;
}

export interface Street2 {
  number: string;
  name: string;
}

export interface Address2 {
  fullName: FullName2;
  country: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  street: Street2;
}

export interface PriceData {
  taxIncludedInPrice: boolean;
  price: string;
}

export interface ShipmentDetails {
  address: Address2;
  discount: string;
  tax: string;
  priceData: PriceData;
}

export interface ShippingInfo {
  deliveryOption: string;
  shippingRegion: string;
  code: string;
  shipmentDetails: ShipmentDetails;
}

export interface MediaItem {
  mediaType: string;
  url: string;
  width: number;
  height: number;
  mediaId: string;
  id: string;
}

export interface PriceData2 {
  taxIncludedInPrice: boolean;
  price: string;
  totalPrice: string;
}

export interface LineItem {
  index: number;
  quantity: number;
  price: string;
  name: string;
  translatedName: string;
  productId: string;
  totalPrice: string;
  lineItemType: string;
  options: any[];
  customTextFields: any[];
  mediaItem: MediaItem;
  sku: string;
  variantId: string;
  discount: string;
  tax: string;
  taxIncludedInPrice: boolean;
  priceData: PriceData2;
  refundedQuantity: number;
}

export interface Activity {
  type: string;
  timestamp: Date;
}

export interface ChannelInfo {
  type: string;
}

export interface EnteredBy {
  id: string;
  identityType: string;
}
export interface Order {
  id: string;
  number: number;
  dateCreated: Date;
  buyerInfo: BuyerInfo;
  currency: string;
  weightUnit: string;
  totals: Totals;
  billingInfo: BillingInfo;
  shippingInfo: ShippingInfo;
  read: boolean;
  archived: boolean;
  paymentStatus: string;
  fulfillmentStatus: string;
  lineItems: LineItem[];
  activities: Activity[];
  fulfillments: any[];
  cartId: string;
  channelInfo: ChannelInfo;
  enteredBy: EnteredBy;
  lastUpdated: Date;
  numericId: string;
  refunds: any[];
  isInternalOrderCreate: boolean;
}

export interface OrdersExperiments {
  epCommitTax: boolean;
  moveMerchantEmailToEp: boolean;
  moveBuyerOrderConfirmationEmailToEp: boolean;
}

export interface OrderPaidType {
  order: Order;
  ordersExperiments: OrdersExperiments;
}

export interface OrderPaidObject {
  eventType: OrderType;
  instanceId: string;
  data: string | OrderPaidType;
}
