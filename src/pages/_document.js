import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Coffee Connoisseur</title>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="preload" href="/fonts/OpenSans_Condensed-Bold.ttf" as='font' crossOrigin='anonymous'/>
            <link rel="preload" href="/fonts/OpenSans_Condensed-Medium.ttf" as='font' crossOrigin='anonymous'/>
            <link rel="preload" href="/fonts/OpenSans_Condensed-Regular.ttf" as='font' crossOrigin='anonymous'/>
            <link rel="preload" href="/fonts/OpenSans_Condensed-SemiBold.ttf" as='font' crossOrigin='anonymous'/>
            <link rel="preload" href="/fonts/OpenSans_Condensed-Light.ttf" as='font' crossOrigin='anonymous'/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  )
}
