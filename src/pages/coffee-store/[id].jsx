import {useRouter} from "next/router";
import Link from "next/link";


const CoffeeStore = () => {
    // retrieve the id from the URL
    const router = useRouter();
    const {id} = router.query;


    // *************************** JSX *************************** //
    return (
        <div>
            <div>
                <Link href='/'>Back To Home</Link>
            </div>
            <h1>Dynamic Coffee Store - {id}</h1>
        </div>
    )
};


export default CoffeeStore;