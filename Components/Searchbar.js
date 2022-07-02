import Searchcss from './Searchbar.module.css'

const Searchbar = () => {
    return (
        <div className={Searchcss.container}>
            <input placeholder='Search any Place' />
            <button>Search</button>
        </div>
    )
}

export default Searchbar