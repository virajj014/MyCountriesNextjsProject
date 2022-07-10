import styles from './MyCountries.module.css'
import { useState } from 'react'
import Searchcss from './Searchbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';


const MyCountries = ({ countries }) => {
    const [keyword, setkeyword] = useState('');
    const router = useRouter();

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


    const handleInputchange = (e) => {
        setkeyword(e.target.value.toLowerCase())
        Setmycountry(countries.filter(country => country.name.common.toLowerCase().includes(keyword)))
    }

    return (

        <div className={styles.countrytable_outer}>

            <div className={Searchcss.container}>
                <div className={Searchcss.searchbar}>
                    <FontAwesomeIcon icon={faSearch} />
                    <input placeholder='Search any Place' onChange={(e) => handleInputchange(e)} />
                </div>
            </div>

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
                    {mycountry.length == 0 ?
                        <h1 >Country not found...</h1>
                        :
                        <div>
                            {mycountry.map((country) =>
                                <div key={country.flags.png} className={styles.country_row} onClick={() => router.push({
                                    pathname: `/countrypage/${country.ccn3}`
                                })}>
                                    <div><p>{country.name.common}</p></div>
                                    <div className={styles.country_flag}><img src={country.flags.png} /></div>
                                    <div><p>{country.population}</p></div>
                                    <div><p>{country.area}</p></div>

                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MyCountries