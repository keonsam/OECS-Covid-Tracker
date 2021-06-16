import './App.css';
import Navbar from './components/navbar/Navbar';
import { useEffect, useMemo, useState } from 'react'
import Loader from './components/loader/Loader';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';

function App() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])

  const countries = ["28", "212", "308", "500", "659", "662", "670", "660", "92", "474", "312"]

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //disabled leave for accessibility
  }

  const getData = async() => {
    const data = await fetch(`https://corona.lmao.ninja/v3/covid-19/countries/:${countries.join(",")}`).then(res => res.json())
    console.log(data)
    setData(data)
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dataSet = useMemo( () => data, [data])

  const columns = useMemo( () => [
    {
      Header: 'Country',
      accessor: 'country',
    },
    {
      Header: 'Total Cases',
      accessor: 'cases',
    },
    {
      Header: 'New Cases',
      accessor: 'todayCases',
    },
    {
      Header: 'Total Deaths',
      accessor: 'deaths',
    },
    {
      Header: 'New Deaths',
      accessor: 'todayDeaths',
    },
    {
      Header: 'Total Recovered',
      accessor: 'recovered',
    },
    {
      Header: 'New Recovered',
      accessor: 'todayRecovered',
    },
    {
      Header: 'Active',
      accessor: 'active',
    },
  ], [])

  return (
    <div className="App">
      <Navbar searchValue={search} handleChange={handleChange} handleSubmit={handleSubmit} />
      <main className="container">
        <div className="main-body">
          {!data?.length ?  <Loader /> : <Table data={dataSet} columns={columns} filterStr={search} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
