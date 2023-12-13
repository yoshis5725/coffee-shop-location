import '@/styles/globals.css'
import {CoffeeStoreProvider} from "../../contexts/coffee-store-context";

export default function App({Component, pageProps}) {
    return (
        <CoffeeStoreProvider>
            <Component {...pageProps} />
        </CoffeeStoreProvider>
    )
}
