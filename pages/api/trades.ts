import type { NextApiRequest, NextApiResponse } from 'next'

type Trade = {
  id: string
  date: string
  buySellIndicator: "B" | "S"
  crypto: string
  amount: number
  fiatCurrency: string
  fiatAmount: number
  feeCurrency: string
  feeAmount: number
}

const trades: Trade[] = [
    {
      id: '6ac189e5-f795-4e9a-b3f1-dd364d1bdd0f',
      date: '2020-04-29 15:13:14.615',
      buySellIndicator: 'B',
      crypto: 'BTC',
      amount: 1,
      fiatCurrency: 'GBP',
      fiatAmount: 6815.45,
      feeCurrency: 'GBP',
      feeAmount: 0
    },
    {
      id: '141ec1ae-18f8-404d-8241-94f728e3b36f',
      date: '2020-05-14 09:14:15.518',
      buySellIndicator: 'S',
      crypto: 'BTC',
      amount: 1,
      fiatCurrency: 'GBP',
      fiatAmount: 7817.4,
      feeCurrency: 'BTC',
      feeAmount: 0
    },
    {
      id: '2ed74398-5983-43cc-bda3-d2e590109b77',
      date: '2020-12-31 10:03:22.537',
      buySellIndicator: 'B',
      crypto: 'ETH',
      amount: 1,
      fiatCurrency: 'USD',
      fiatAmount: 746.76,
      feeCurrency: 'USD',
      feeAmount: 11.22
    },
    {
      id: '6304e535-cb9c-4ff1-9a2c-c03c2d5e1b60',
      date: '2020-12-31 10:04:22.460',
      buySellIndicator: 'B',
      crypto: 'XLM',
      amount: 3000,
      fiatCurrency: 'USD',
      fiatAmount: 379.49,
      feeCurrency: 'USD',
      feeAmount: 5.7
    },
    {
      id: '2239c9a9-1c58-45c2-b7e4-37ccb9ba60e3',
      date: '2020-12-31 10:05:44.880',
      buySellIndicator: 'B',
      crypto: 'XTZ',
      amount: 100,
      fiatCurrency: 'USD',
      fiatAmount: 199.98,
      feeCurrency: 'USD',
      feeAmount: 3.01
    },
    {
      id: '8c62cba3-1680-4365-9dab-deccf851ce72',
      date: '2020-12-31 10:07:25.058',
      buySellIndicator: 'B',
      crypto: 'BTC',
      amount: 0.017145,
      fiatCurrency: 'USD',
      fiatAmount: 500,
      feeCurrency: 'BTC',
      feeAmount: 0.00025745
    },
    {
      id: '59d888bb-6fe7-474c-abbe-88917f0e134f',
      date: '2020-12-31 10:08:02.599',
      buySellIndicator: 'B',
      crypto: 'LTC',
      amount: 1,
      fiatCurrency: 'USD',
      fiatAmount: 127.19,
      feeCurrency: 'USD',
      feeAmount: 1.92
    },
    {
      id: '4101b06b-c9db-41c7-ba9b-f3ca76779ad2',
      date: '2021-01-01 15:48:11.215',
      buySellIndicator: 'B',
      crypto: 'BTC',
      amount: 0.0699528,
      fiatCurrency: 'GBP',
      fiatAmount: 1500,
      feeCurrency: 'BTC',
      feeAmount: 0.00105082
    },
    {
      id: '3524daf9-86d3-4874-8c8b-e9515eeba027',
      date: '2021-01-01 15:48:25.494',
      buySellIndicator: 'B',
      crypto: 'ETH',
      amount: 2.77485135,
      fiatCurrency: 'GBP',
      fiatAmount: 1500,
      feeCurrency: 'ETH',
      feeAmount: 0.04168551
    },
    {
      id: '799f8af3-c65f-4299-ab84-315b1b49d4fa',
      date: '2021-01-05 18:31:50.944',
      buySellIndicator: 'S',
      crypto: 'BTC',
      amount: 0.02064554,
      fiatCurrency: 'GBP',
      fiatAmount: 500,
      feeCurrency: 'BTC',
      feeAmount: 0.00030969
    },
    {
      id: '0fc176c0-9bbb-42e2-8f40-f96ce6b7295d',
      date: '2021-01-05 18:32:36.734',
      buySellIndicator: 'S',
      crypto: 'ETH',
      amount: 1.1397569,
      fiatCurrency: 'GBP',
      fiatAmount: 900,
      feeCurrency: 'ETH',
      feeAmount: 0.01709636
    },
    {
      id: '1cb501c5-54f5-4d91-a15d-f5c345508f05',
      date: '2021-01-11 14:05:34.971',
      buySellIndicator: 'S',
      crypto: 'BTC',
      amount: 0.0648343,
      fiatCurrency: 'GBP',
      fiatAmount: 1541.61,
      feeCurrency: 'GBP',
      feeAmount: 23.12
    },
    {
      id: '97c0870b-1aeb-41f3-b9ef-01dd1bc39673',
      date: '2021-01-11 14:06:26.169',
      buySellIndicator: 'S',
      crypto: 'ETH',
      amount: 2.56631258,
      fiatCurrency: 'GBP',
      fiatAmount: 1875.15,
      feeCurrency: 'GBP',
      feeAmount: 28.13
    },
    {
      id: '1926301b-ce10-40aa-a9bc-54e595ab5f30',
      date: '2021-01-11 14:08:26.987',
      buySellIndicator: 'S',
      crypto: 'LTC',
      amount: 1,
      fiatCurrency: 'GBP',
      fiatAmount: 93.8,
      feeCurrency: 'GBP',
      feeAmount: 1.41
    },
    {
      id: '9654e3e8-9933-4315-b641-e7e09a7cbebf',
      date: '2021-01-11 14:11:24.062',
      buySellIndicator: 'S',
      crypto: 'XLM',
      amount: 3000,
      fiatCurrency: 'GBP',
      fiatAmount: 505.96,
      feeCurrency: 'GBP',
      feeAmount: 7.59
    },
    {
      id: 'f13bc903-0279-4adb-a84a-600d5d3307b8',
      date: '2021-01-11 14:15:20.346',
      buySellIndicator: 'S',
      crypto: 'XTZ',
      amount: 100,
      fiatCurrency: 'GBP',
      fiatAmount: 159.89,
      feeCurrency: 'GBP',
      feeAmount: 2.4
    },
    {
      id: 'edcae3ab-5ada-41ab-8bd6-3f3421d7985b',
      date: '2021-01-11 17:30:10.817',
      buySellIndicator: 'B',
      crypto: 'BTC',
      amount: 0.1,
      fiatCurrency: 'GBP',
      fiatAmount: 2422.05,
      feeCurrency: 'GBP',
      feeAmount: 36.33
    },
    {
      id: '90464af8-a4cc-41af-b792-000e91e7ac34',
      date: '2021-01-11 17:30:41.020',
      buySellIndicator: 'B',
      crypto: 'ETH',
      amount: 2,
      fiatCurrency: 'GBP',
      fiatAmount: 1468.12,
      feeCurrency: 'GBP',
      feeAmount: 22.02
    },
    {
      id: 'e1b5264b-7aef-4fdb-b9e6-d0a1b172dacc',
      date: '2021-01-11 23:04:11.240',
      buySellIndicator: 'B',
      crypto: 'XLM',
      amount: 1200,
      fiatCurrency: 'GBP',
      fiatAmount: 225.26,
      feeCurrency: 'GBP',
      feeAmount: 3.38
    },
    {
      id: 'e3bba945-0452-4f76-bc40-ce33a5dff4d6',
      date: '2021-01-21 09:13:09.899',
      buySellIndicator: 'S',
      crypto: 'BTC',
      amount: 0.1,
      fiatCurrency: 'GBP',
      fiatAmount: 2400.92,
      feeCurrency: 'GBP',
      feeAmount: 36.01
    },
    {
      id: 'c9488095-7745-494d-ac70-8fc44dba86ff',
      date: '2021-01-21 09:13:20.633',
      buySellIndicator: 'S',
      crypto: 'ETH',
      amount: 2,
      fiatCurrency: 'GBP',
      fiatAmount: 1815.49,
      feeCurrency: 'GBP',
      feeAmount: 27.23
    },
    {
      id: '22ac3655-78b5-4e3a-880c-f16dd5d198c1',
      date: '2021-01-21 09:13:31.950',
      buySellIndicator: 'S',
      crypto: 'XLM',
      amount: 1200,
      fiatCurrency: 'GBP',
      fiatAmount: 240.22,
      feeCurrency: 'GBP',
      feeAmount: 3.6
    },
    {
      id: '72c8a8f0-0add-4b61-9235-4dbd678c64af',
      date: '2021-01-21 14:46:25.745',
      buySellIndicator: 'B',
      crypto: 'ETH',
      amount: 2,
      fiatCurrency: 'GBP',
      fiatAmount: 1778.16,
      feeCurrency: 'GBP',
      feeAmount: 26.67
    },
    {
      id: 'bb3c08fc-4235-4f3e-ad63-52f4068661dc',
      date: '2021-01-21 22:21:56.892',
      buySellIndicator: 'B',
      crypto: 'BTC',
      amount: 0.01338261,
      fiatCurrency: 'GBP',
      fiatAmount: 300,
      feeCurrency: 'BTC',
      feeAmount: 0.00020073
    },
    {
      id: '9bacc3f4-5f16-4943-82a7-25c40626ae2f',
      date: '2021-01-22 00:27:28.783',
      buySellIndicator: 'B',
      crypto: 'BTC',
      amount: 0.0139395,
      fiatCurrency: 'GBP',
      fiatAmount: 300,
      feeCurrency: 'BTC',
      feeAmount: 0.00020908
    },
    {
      id: '7c5021ce-687b-4ff2-91ce-6aaa7dbe1fcf',
      date: '2021-02-02 00:45:10.105',
      buySellIndicator: 'S',
      crypto: 'ETH',
      amount: 0.19747459,
      fiatCurrency: 'GBP',
      fiatAmount: 200,
      feeCurrency: 'ETH',
      feeAmount: 0.00296212
    },
    {
      id: '1aa6d308-3db0-4220-b452-73c26a60ee39',
      date: '2021-02-02 21:28:15.296',
      buySellIndicator: 'S',
      crypto: 'ETH',
      amount: 0.17992008,
      fiatCurrency: 'GBP',
      fiatAmount: 200,
      feeCurrency: 'ETH',
      feeAmount: 0.00269881
    },
    {
      id: '60630cd7-7418-a4f9-a565-8ecb7fda8fcf',
      date: '2021-03-30 11:34:47.500',
      buySellIndicator: 'B',
      crypto: 'BTC',
      amount: 0.0931727,
      fiatCurrency: 'GBP',
      fiatAmount: 4000,
      feeCurrency: 'BTC',
      feeAmount: 0.00139759
    },
    {
      id: '60630cec-1399-a629-a6bc-dc3f7e075e0d',
      date: '2021-03-30 11:35:08.732',
      buySellIndicator: 'B',
      crypto: 'ETH',
      amount: 2.241879,
      fiatCurrency: 'GBP',
      fiatAmount: 3000,
      feeCurrency: 'ETH',
      feeAmount: 0.03362814
    },
    {
      id: '6093e697-11ad-af83-ad05-055215dd43c5',
      date: '2021-05-06 12:52:39.647',
      buySellIndicator: 'S',
      crypto: 'BTC',
      amount: 0.02411826,
      fiatCurrency: 'GBP',
      fiatAmount: 1000,
      feeCurrency: 'BTC',
      feeAmount: 0.00036179
    },
    {
      id: '60944341-25ed-adbd-8c75-76f734911330',
      date: '2021-05-06 19:28:01.752',
      buySellIndicator: 'S',
      crypto: 'BTC',
      amount: 0.05003864,
      fiatCurrency: 'GBP',
      fiatAmount: 2000,
      feeCurrency: 'BTC',
      feeAmount: 0.00075059
    },
    {
      id: '60969783-54be-a7f7-ab77-7b26a7b12e81',
      date: '2021-05-08 13:52:03.445',
      buySellIndicator: 'S',
      crypto: 'BTC',
      amount: 0.04341813,
      fiatCurrency: 'GBP',
      fiatAmount: 1840.7,
      feeCurrency: 'GBP',
      feeAmount: 27.61
    },
    {
      id: '6096c126-0d28-ac22-a732-e466bf8a8060',
      date: '2021-05-08 16:49:42.925',
      buySellIndicator: 'S',
      crypto: 'ETH',
      amount: 0.81412945,
      fiatCurrency: 'GBP',
      fiatAmount: 2200,
      feeCurrency: 'ETH',
      feeAmount: 0.01221199
    },
    {
      id: '609cf389-d843-af81-847f-f819375d85d6',
      date: '2021-05-13 09:38:17.840',
      buySellIndicator: 'S',
      crypto: 'ETH',
      amount: 2.99885382,
      fiatCurrency: 'GBP',
      fiatAmount: 8069.52,
      feeCurrency: 'GBP',
      feeAmount: 121.04
    }
  ]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Trade[]>
) {
  res.status(200).json(trades)
}


