import styles from '../../styles/coffee-store.module.css';
import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cls from "classnames";
import {fetchCoffeeShops} from "../../../utils/foursquare-utils";



/**
 * gets called at build time and lets you specify which dynamic routes to pre-render based on data.
 * @returns {{paths: *, fallback: boolean}}
 */
export const getStaticPaths = async () => {
    const coffeeStores = await fetchCoffeeShops();
    const paths = coffeeStores.map(coffeeStore => {
        return {
            params: {id: coffeeStore.id}
        }
    });
    return {
        paths,
        fallback: false
    };
};


/**
 * gets called with the following object: {params: {id: '1'}} (params.id) - params.id is the dynamic route parameter id
 *
 * @param params
 * @returns {{props: {coffeeStores: *}}}
 */
export const getStaticProps = async ({params}) => {
    console.log('params: ', params)
    const {id} = params;
    const coffeeStores = await fetchCoffeeShops();

    return {
        props: {
            coffeeStores: coffeeStores.find(coffeeStore => coffeeStore.id.toString() === id)
        }
    }
};



const CoffeeStore = (staticProps) => {
    const router = useRouter();
    const routerId = router.query.id;

    // if route is not yet generated, show loading
    if (!staticProps.coffeeStores) {
        return <h1>Loading...</h1>
    }
    const {name, imgUrl, address, city} = staticProps.coffeeStores; // staticProps destructured


    const handleUpVoteButton = () => {
        console.log('up vote button clicked');
    };


    // *************************** JSX *************************** //
    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <div>
                            <Link href='/'>← Back To Home</Link>
                        </div>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image className={styles.storeImg}
                           src={imgUrl ? imgUrl : '/static/generic-coffee.jpg'}
                           alt={name}
                           width={500}
                           height={360}
                    />
                </div>
                <div className={cls('glass', styles.col2)}>
                    {/*address*/}
                    <div className={styles.iconWrapper}>
                        <Image src='/icons/places.svg' alt='places icon' width={24} height={24}/>
                        <p className={styles.text}>{address}</p>
                    </div>

                    {/*city*/}
                    <div className={styles.iconWrapper}>
                        <Image src='/icons/nearMe.svg' alt='near me icon' width={24} height={24}/>
                        <p className={styles.text}>{city}</p>
                    </div>

                    {/*rating*/}
                    <div className={styles.iconWrapper}>
                        <Image src='/icons/star.svg' alt='star icon' width={24} height={24}/>
                        <p className={styles.text}>1</p>
                    </div>

                    {/*up vote button*/}
                    <button className={styles.upvoteButton} onClick={handleUpVoteButton}>Up Vote</button>
                </div>
            </div>
        </div>
    )
};


export default CoffeeStore;