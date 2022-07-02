import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Searchbar from '../Components/Searchbar.js'
import MyCountries from '../Components/MyCountries.js'

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all")
  const data = await res.json();

  return {
    props: { data }
  }
}

export default function Home({ data }) {
  // console.log(data)
  return (
    <div>
      <h1 className={styles.heading}>World Rank project</h1>
      <Searchbar />
      <MyCountries countries={data} />
    </div>
  )
}
