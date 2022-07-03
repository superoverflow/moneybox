import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider, AppShell, Navbar, Header, Text } from "@mantine/core"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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
            <Navbar width={{ base: 300 }} p="xs">
              <Text size="md">Dashboard</Text>
              <Text size="md">Trade History</Text>
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
