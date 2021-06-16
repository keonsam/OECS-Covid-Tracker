import "./Navbar.css"

const Navbar = ({searchValue, handleChange, handleSubmit}) => {
    return (
        <nav>
            <div className="container nav-body">
                <h1>OECS Covid Tracker</h1>
                <form role='search' onSubmit={handleSubmit}>
                    <label htmlFor='header-search'>
                        <span className='visually-hidden'>Search</span>
                    </label>

                    <input className="search-field" type='search' id='header-search' value={searchValue} onChange={handleChange}/>

                    <button type='submit' className='visually-hidden'>
                    Search
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;