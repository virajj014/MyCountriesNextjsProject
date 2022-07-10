import { useRouter } from "next/dist/client/router"
import styles from './Countrycard.module.css'

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.country}`)
    const data = await res.json()

    return {
        props: { data }
    }
}
const country = (data) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    console.log(data.data[0])

    const e = data.data[0]
    return (
        <div className={styles.countrycard_outer}>
            <div className={styles.countrycard_inner}>
                <div className={styles.left}>
                    <img src={e.flags.png} />
                </div>
                <div className={styles.right}>
                    <div className={styles.section_1}>
                        <h1>{e.name.common}, {e.region}</h1>
                    </div>
                    <h2>{e.capital}</h2>

                    <p>{e.area} km²</p>
                    <p>{e.population}</p>

                    <button onClick={() => router.push({
                        pathname: `/`
                    })}>Go back </button>
                </div>
            </div>
        </div>
    )
}

export default country