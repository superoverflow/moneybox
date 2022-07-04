import { LoadingOverlay, Box, Text, Group, Space } from "@mantine/core"
import axios from "axios"
import { useQuery } from "react-query"
import type { NextPage } from "next"
import type { Trade } from "./api/trades"
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridRenderCellParams,
} from "@mui/x-data-grid"

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
    width: 200,
  },
  {
    headerName: "B/S",
    field: "buySellIndicator",
    width: 50,
  },
  {
    headerName: "Crypto",
    field: "symbol",
    width: 80,
  },
  {
    headerName: "Crypto",
    field: "crypto",
    type: 'number',
    width: 200,
  },
  {
    headerName: "Fiat",
    field: "fiat",
    type: 'number',
    width: 150,
  },
  {
    headerName: "Fee",
    field: "fee",
    type: 'number',
    width: 150,
  },
]

const TradeHistory: NextPage = () => {
  const { isLoading, data } = useQuery("trades", fetchTradeHistory)

  const rows = tradesToRows(data)
  return (
    <Group>
      <LoadingOverlay visible={!!isLoading} />
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={rows} columns={cols} />
      </div>
    </Group>
  )
}

export default TradeHistory
