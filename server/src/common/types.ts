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
