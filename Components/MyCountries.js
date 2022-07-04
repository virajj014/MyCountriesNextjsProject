import styles from './MyCountries.module.css'
import { useState } from 'react'

const MyCountries = ({ countries }) => {
    const [mycountry, Setmycountry] = useState(countries);
    const [populationflag, Setpopulationflag] = useState(0);
    const [areaflag, Setareaflag] = useState(0);
    const [nameflag, Setnameflag] = useState(0);

    const orderbypop = (countries) => {
        Setareaflag(0)
        Setnameflag(0)
        if (populationflag == 0) {
            let data = [...countries].sort((a, b) => (a.population < b.population ? 1 : -1))
            Setpopulationflag(1)
            return Setmycountry(data)
        }
        if (populationflag == 1) {
            let data = [...countries].sort((a, b) => (a.population > b.population ? 1 : -1))
            Setpopulationflag(0)
            return Setmycountry(data)
        }
    }

    const orderbyname = (countries) => {
        Setareaflag(0)
        Setpopulationflag(0)
        if (nameflag == 0) {
            let data = [...countries].sort((a, b) => (a.name.common < b.name.common ? 1 : -1))
            Setnameflag(1)
            return Setmycountry(data)
        }
        if (nameflag == 1) {
            let data = [...countries].sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
            Setnameflag(0)
            return Setmycountry(data)
        }
    }


    const orderbyarea = (countries) => {
        Setpopulationflag(0)
        Setnameflag(0)
        if (areaflag == 0) {
            let data = [...countries].sort((a, b) => (a.area < b.area ? 1 : -1))
            Setareaflag(1)
            return Setmycountry(data)
        }
        if (areaflag == 1) {
            let data = [...countries].sort((a, b) => (a.area > b.area ? 1 : -1))
            Setareaflag(0)
            return Setmycountry(data)
        }
    }

    return (

        <div className={styles.countrytable_outer}>
            <div className={styles.countrytable_inner}>
                <div className={styles.head}>
                    <button onClick={() => orderbyname(countries)}>
                        Name {
                            nameflag == 0 ? <i className={`${styles.arrow} ${styles.down}`}></i> :
                                <i className={`${styles.arrow} ${styles.up}`}></i>
                        }
                    </button>
                    <button>
                        Flags
                    </button>
                    <button onClick={() => orderbypop(countries)}>
                        Population{
                            populationflag == 0 ? <i className={`${styles.arrow} ${styles.down}`}></i> :
                                <i className={`${styles.arrow} ${styles.up}`}></i>
                        }
                    </button>
                    <button onClick={() => orderbyarea(countries)}>
                        Area
                        {
                            areaflag == 0 ? <i className={`${styles.arrow} ${styles.down}`}></i> :
                                <i className={`${styles.arrow} ${styles.up}`}></i>
                        }
                    </button>
                </div>

                <div className={styles.content}>
                    {mycountry.map((country) =>
                        <div className={styles.country_row}>
                            <div><p>{country.name.common}</p></div>
                            <div className={styles.country_flag}><img src={country.flags.png} /></div>
                            <div><p>{country.population}</p></div>
                            <div><p>{country.area}</p></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyCountries