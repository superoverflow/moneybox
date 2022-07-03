import { Text, LoadingOverlay, Group } from "@mantine/core"
import type { NextPage } from "next"
import axios from "axios"
import { useQuery } from "react-query"
import { Trade } from "./api/trades"

const fetchTradeHistory = async () => {
  const { data } = await axios.get<Trade[]>("api/trades")
  return data
}

const TradeHistory: NextPage = () => {
  const { isLoading, data } = useQuery("trades", fetchTradeHistory)
  
  return (
    <Group>
      <LoadingOverlay visible={!!isLoading} />
      {data?.map((trade) => (
        <Text key={trade.id} size="md">
          {trade.id}
        </Text>
      ))}
    </Group>
  )
}

export default TradeHistory
