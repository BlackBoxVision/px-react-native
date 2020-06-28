import { NativeModules } from 'react-native';

export type TrackingOptions = {
  /**
   * Session ID for checkout tracking. Only android support.
   */
  sessionId?: string;
};

export type AdvancedOptions = {
  /**
   * Boolean flag to determine if amount row should be enabled
   */
  amountRowEnabled?: boolean;
  /**
   * Boolean flag to determine if bank deals should be enabled
   */
  bankDealsEnabled?: boolean;
  /**
   * Custom product ID
   */
  productId?: string;
};

export type PaymentOptions = {
  /**
   * Key generated from your account to launch a checkout
   */
  publicKey: string;
  /**
   * ID of the payment preference
   */
  preferenceId: string;
  /**
   * Options to enable user-tracking specific features
   */
  trackingOptions?: TrackingOptions | null;
  /**
   * Options to customize checkout behaviour
   */
  advancedOptions?: AdvancedOptions | null;
};

export type Payment = {
  /**
   * ID of the payment
   */
  id: string;
  /**
   * Status of the payment
   */
  status: string;
};

export type MercadopagoPx = {
  /**
   * Method that lets you start an instance of MP Checkout to generate a payment in guest mode
   *
   * @param options - necessary payment options to start checkout
   */
  createPayment(options: PaymentOptions): Promise<Payment>;
};

const { ReactNativeMercadopagoPx } = NativeModules;

export default ReactNativeMercadopagoPx as MercadopagoPx;
