import searchIcon from '../assets/search.png'
export default function Search({search}){
    return(
        <div className="search">
            <img src={searchIcon} className='search-icons' style={{width:'1.3rem'}}></img>
            <input placeholder='type to search' onChange={(e) => search(e.target.value)} type='text'></input>
        </div>
    )
}