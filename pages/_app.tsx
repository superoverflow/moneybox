import { AppProps } from "next/app"
import { useRouter } from "next/router"
import Head from "next/head"
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  Text,
  Button,
} from "@mantine/core"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Moneybox</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="favicon.png"></link>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <AppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 180 }} p="xs">
              <Button
                variant="subtle"
                size="md"
                onClick={() => router.push("/dashboard")}
              >
                Dashboard
              </Button>
              <Button
                variant="subtle"
                size="md"
                onClick={() => router.push("/tradeHistory")}
              >
                Trade History
              </Button>
            </Navbar>
          }
          header={
            <Header height={60} p="xs">
              <Text size="lg">Moneybox</Text>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          {/* Your application here */}

          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </QueryClientProvider>
  )
}
