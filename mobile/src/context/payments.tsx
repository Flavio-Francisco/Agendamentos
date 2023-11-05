import React, { useEffect } from "react";
import { ReactNode, SetStateAction, createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiMercadoPago } from "../api/api";
import { openBrowserAsync } from "expo-web-browser";


export interface CreatePayment {

  items: [
    {
      title: 'Comprar Creditos';
      description: "horas aulas";
      picture_url: "http://www.myapp.com/myimage.jpg";
      category_id: "Aulas";
      quantity: 1;
      currency_id: "BRL";
      unit_price: number;
      notification_url: null | string;
    }
  ],
}

export interface ResposePayment {
  id: number;
  date_created: string;
  date_approved: null | string;
  date_last_updated: string;
  date_of_expiration: string;
  money_release_date: null | string;
  money_release_status: string;
  operation_type: string;
  issuer_id: string;
  payment_method_id: string;
  payment_type_id: string;
  payment_method: {
    id: string;
    type: string;
    issuer_id: string;
  },
  status: string;
  status_detail: string;
  currency_id: string;
  description: string;
  live_mode: boolean,
  sponsor_id: null | string;
  authorization_code: null | string;
  money_release_schema: null | string;
  taxes_amount: number;
  counter_currency: null | string;
  brand_id: null | string;
  shipping_amount: number;
  build_version: string;
  pos_id: null | string;
  store_id: null | string;
  integrator_id: null | string;
  platform_id: null | string;
  corporation_id: null | string;
  payer: {
    identification: {
      number: number;
      type: string;
    },
    entity_type: null | string;
    phone: {
      number: null | number;
      extension: null | number;
      area_code: null | number;
    },
    last_name: null | string;
    id: string;
    type: string;
    first_name: null | string;
    email: string;
  },
  collector_id: number
  marketplace_owner: null | string;
  metadata: {},
  additional_info: {
    items: [
      {
        id: string;
        title: string;
        description: string;
        picture_url: string;
        category_id: string;
        quantity: string;
        unit_price: number
      }
    ],
    payer: {
      phone: {
        area_code: number;
        number: number;
      },
      first_name: string;
      last_name: string;
    },
    shipments: {
      receiver_address: {
        zip_code: string;
        state_name: string;
        city_name: string;
        street_name: string;
        street_number: string;
      }
    },
    available_balance: null | string;
    nsu_processadora: null | string;
    authentication_code: null | string;
  },
  order: {},
  external_reference: string;
  transaction_amount: number;
  transaction_amount_refunded: number;
  coupon_amount: number;
  differential_pricing_id: null | string;
  financing_group: null | string;
  deduction_schema: null | string;
  callback_url: null | string;
  installments: number;
  transaction_details: {
    payment_method_reference_id: null | string;
    acquirer_reference: null | string;
    net_received_amount: number;
    total_paid_amount: number;
    overpaid_amount: number;
    external_resource_url: null | string;
    installment_amount: number;
    financial_institution: null | string;
    payable_deferral_period: null | string;
    bank_transfer_id: null | string;
    transaction_id: null | string;
  },
  fee_details: [],
  charges_details: [
    {
      id: string;
      name: string;
      type: string;
      accounts: {
        from: string;
        to: string;
      },
      client_id: number;
      date_created: string;
      last_updated: string;
      amounts: {
        original: number;
        refunded: number;
      },
      metadata: {},
      reserve_id: null | string;
      refund_charges: []
    }
  ],
  captured: boolean;
  binary_mode: boolean;
  call_for_authorize_id: null | string;
  statement_descriptor: null | string;
  card: {},
  notification_url: null | string;
  refunds: [],
  processing_mode: string;
  merchant_account_id: null | string;
  merchant_number: null | string;
  acquirer_reconciliation: [],
  point_of_interaction: {
    type: string;
    business_info: {
      unit: string;
      sub_unit: string;
    },
    location: {
      state_id: null | string;
      source: null | string;
    },
    application_data: {
      name: null | string;
      version: null | string;
    },
    transaction_data: {
      qr_code: string;
      bank_transfer_id: null | string;
      transaction_id: null | string;
      e2e_id: null | string;
      financial_institution: null | string;
      ticket_url: string;
      bank_info: {
        payer: {
          account_id: null | string;
          id: null | string;
          long_name: null | string;
          account_holder_name: null | string;
          identification: {
            number: null | number
            type: null | string;
          },
          external_account_id: null | string;
        },
        collector: {
          account_id: null | string;
          long_name: null | string;
          account_holder_name: string;
          transfer_account_id: null | string;
        },
        is_same_bank_account_owner: null | string;
        origin_bank_id: null | string;
        origin_wallet_id: null | string;
      },
      infringement_notification: {
        type: null | string;
        status: null | string;
      },
      qr_code_base64: string;
    }
  },
  accounts_info: null | string;
  tags: null | string;
}



export interface PaymentContextDataProps {
  createPayment: CreatePayment;
  resposePaymment: ResposePayment;
  createPrefence: (valor: string) => void;
}

interface PaymentContextProviderProps {
  children: ReactNode;

}


export const AuthContextPayment = createContext({} as PaymentContextDataProps);


export function PaymentContextProvider({ children }: PaymentContextProviderProps) {
  const [createPayment, setCreatePaymet] = useState<CreatePayment>({} as CreatePayment);
  const [resposePaymment, setResposePaymment] = useState<ResposePayment>({} as ResposePayment);


  useEffect(() => {
    async function loadStorageDataPayment() {
      const storagedCreatePayment = await AsyncStorage.getItem("payment");

      console.log(setCreatePaymet);

      if (storagedCreatePayment) {
        setCreatePaymet(JSON.parse(storagedCreatePayment));
      }
    }
    async function loadStorageDataResposePayment() {
      const storagedCreatePaymentRespose = await AsyncStorage.getItem("paymentRespose");

      console.log(storagedCreatePaymentRespose);

      if (storagedCreatePaymentRespose) {
        setResposePaymment(JSON.parse(storagedCreatePaymentRespose));
      }
    }
    loadStorageDataResposePayment()
    loadStorageDataPayment();
  }, []);


  async function createPrefence(valor: string) {
    if (valor) {
      function removeMaskedNumber(input: string) {

        const digitsOnly = input.replace(/\D/g, '');

        const number = parseFloat(digitsOnly);

        return number;
      }
      console.log(Number(removeMaskedNumber(valor)));

      apiMercadoPago.post('', {
        items: [
          {
            title: 'Comprar Creditos',
            description: "horas aulas",
            picture_url: "http://www.myapp.com/myimage.jpg",
            category_id: "Aulas",
            quantity: 1,
            currency_id: "BRL",
            unit_price: Number(removeMaskedNumber(valor)),
            notification_url: "http://10.0.0.2:8080/webhook/mercadopago"
          }
        ],
      }
      )
        .then(respose => {
          const { init_point } = respose.data
          console.log(init_point);
          openBrowserAsync(init_point)
        })
        .catch(erro => {
          console.log(erro);

        })
    }
  }

  return (
    <AuthContextPayment.Provider
      value={{
        createPayment,
        resposePaymment,
        createPrefence

      }}
    >
      {children}
    </AuthContextPayment.Provider>
  )

}
