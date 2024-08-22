// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The invoice payment object
     */
    interface InvoicePayment {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'invoice_payment';

      /**
       * Excess payment that was received for this invoice and credited to the customer's `invoice_credit_balance`. This field is null until the payment is `paid`. Overpayment can happen when you attach more than one PaymentIntent to the invoice, and each of them succeeds. To avoid overpayment, cancel any PaymentIntents that you do not need before attaching more.
       */
      amount_overpaid: number | null;

      /**
       * Amount that was actually paid for this invoice, in cents (or local equivalent). This field is null until the payment is `paid`. This amount can be less than the `amount_requested` if the PaymentIntent's `amount_received` is not sufficient to pay all of the invoices that it is attached to.
       */
      amount_paid: number | null;

      /**
       * Amount intended to be paid toward this invoice, in cents (or local equivalent)
       */
      amount_requested: number;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The invoice that was paid.
       */
      invoice: string | Stripe.Invoice | Stripe.DeletedInvoice;

      /**
       * Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice's `amount_remaining`. The PaymentIntent associated with the default payment can't be edited or canceled directly.
       */
      is_default: boolean | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      payment: InvoicePayment.Payment;

      /**
       * The status of the payment, one of `open`, `paid`, or `canceled`.
       */
      status: string;

      status_transitions: InvoicePayment.StatusTransitions;
    }

    namespace InvoicePayment {
      interface Payment {
        /**
         * ID of the successful charge for this payment when `type` is `charge`.
         */
        charge?: string | Stripe.Charge;

        out_of_band_payment?: Payment.OutOfBandPayment;

        /**
         * ID of the PaymentIntent associated with this payment when `type` is `payment_intent`. Note: This property is only populated for invoices finalized on or after March 15th, 2019.
         */
        payment_intent?: string | Stripe.PaymentIntent;

        /**
         * Type of payment object associated with this invoice payment.
         */
        type: Payment.Type;
      }

      namespace Payment {
        interface OutOfBandPayment {
          /**
           * Amount paid on this out of band payment, in cents (or local equivalent)
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * The type of money movement for this out of band payment record.
           */
          money_movement_type: string;

          /**
           * The timestamp when this out of band payment was paid.
           */
          paid_at: number | null;

          /**
           * The reference for this out of band payment record.
           */
          payment_reference: string | null;
        }

        type Type = 'charge' | 'out_of_band_payment' | 'payment_intent';
      }

      interface StatusTransitions {
        /**
         * The time that the payment was canceled.
         */
        canceled_at: number | null;

        /**
         * The time that the payment succeeded.
         */
        paid_at: number | null;
      }
    }
  }
}