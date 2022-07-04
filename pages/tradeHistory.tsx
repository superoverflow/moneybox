import { LoadingOverlay, Center, Stack, Text } from "@mantine/core"
import { reduce } from "lodash"
import axios from "axios"
import { useQuery } from "react-query"
import type { NextPage } from "next"
import type { Trade } from "./api/trades"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"

const currencyDetails = [
  {
    code: "XTZ",
    symbol: "ꜩ",
  },
  {
    code: "XLM",
    symbol: "*",
  },
  {
    code: "LTC",
    symbol: "Ł",
  },
  {
    code: "BTC",
    symbol: "₿",
  },
  {
    code: "ETH",
    symbol: "Ξ",
  },
  {
    code: "GBP",
    symbol: "£",
  },
  {
    code: "USD",
    symbol: "$",
  },
  {
    code: "EUR",
    symbol: "€",
  },
]

const fetchTradeHistory = async () => {
  const { data } = await axios.get<Trade[]>("api/trades")
  return data
}

const tradesToRows = (trades: Trade[] | undefined): GridRowsProp => {
  if (!trades) {
    return []
  }
  //TODO: calculate averageCost, cummulativePosition
  return trades.map((trade) => {
    return {
      id: trade.id,
      date: trade.date,
      buySellIndicator: trade.buySellIndicator,
      symbol: trade.crypto,
      crypto: `${trade.amount} ${trade.crypto}`,
      fiat: `${trade.fiatAmount} ${trade.fiatCurrency}`,
      fee: `${trade.feeAmount} ${trade.feeCurrency}`,
    }
  })
}

const cols: GridColDef[] = [
  {
    headerName: "Date",
    field: "date",
    width: 250,
  },
  {
    headerName: "B/S",
    field: "buySellIndicator",
    width: 50,
  },
  {
    headerName: "Crypto",
    field: "symbol",
    width: 120,
  },
  {
    headerName: "Crypto",
    field: "crypto",
    type: "number",
    width: 150,
  },
  {
    headerName: "Fiat",
    field: "fiat",
    type: "number",
    width: 150,
  },
  {
    headerName: "Fee",
    field: "fee",
    type: "number",
    width: 150,
  },
]

const TradeHistory: NextPage = () => {
  const { isLoading, data } = useQuery("trades", fetchTradeHistory)

  const rows = tradesToRows(data)
  const tableWidth =
    200 +
    reduce(
      cols.map((c) => c.width || 100),
      (acc, elem) => acc + elem,
      0
    )
  return (
    <Stack>
      <Text size="md">Crypto Trading History</Text>
      <Center>
        <LoadingOverlay visible={!!isLoading} />
        <div style={{ height: 800, width: tableWidth }}>
          <DataGrid rows={rows} columns={cols} />
        </div>
      </Center>
    </Stack>
  )
}

export default TradeHistory
