import { Table, LoadingOverlay, Group } from "@mantine/core"
import type { NextPage } from "next"
import axios from "axios"
import { useQuery } from "react-query"
import { Trade } from "./api/trades"

const fetchTradeHistory = async () => {
  const { data } = await axios.get<Trade[]>("api/trades")
  return data
}

const cols = [
  {
    header: "Date",
  },
  {
    header: "B/S",
  },
  {
    header: "Crypto",
  },
  {
    header: "Amount",
  },
  {
    header: "Fiat Currency",
  },
  {
    header: "Fiat Amount",
  },
  {
    header: "Fee",
  },
]

const TradeHistory: NextPage = () => {
  const { isLoading, data } = useQuery("trades", fetchTradeHistory)
  const tableHeader = (
    <thead>
      <tr>
        {cols.map((col, index) => (
          <th key={index}>{col.header}</th>
        ))}
      </tr>
    </thead>
  )
  const rows = data?.map((trade) => (
    <tr key={trade.id}>
      <td>{trade.date}</td>
      <td>{trade.buySellIndicator}</td>
      <td>{trade.crypto}</td>
      <td>{trade.amount}</td>
      <td>{trade.fiatCurrency}</td>
      <td>{trade.fiatAmount}</td>
      <td>
        {trade.feeCurrency} {trade.feeAmount}
      </td>
    </tr>
  ))

  return (
    <Group>
      <LoadingOverlay visible={!!isLoading} />
      <Table>
        {tableHeader}
        <tbody>{rows}</tbody>
      </Table>
    </Group>
  )
}

export default TradeHistory
