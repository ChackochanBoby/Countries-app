import { useEffect, useState } from "react"
import Card from "./Card"
import Spinner from "./Spinner"
function MainContent() {
    const [countryList, getCountries] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(Response => Response.json())
            .then(data => {
                const countries = data.map(country => (
                    {
                        "name": country.name.common,
                        "flag": country.flags.png,
                        "region": country.continents
                    }
                ))
                countries.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                })
                getCountries(countries)
                setLoading(false)
            })
    })
    if (loading) {
        return <Spinner />
    }
    return (
        <main className="max-w-full mt-[4.7rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 max-w-screen-2xl mx-auto px-5 gap-7 pt-7 grid-row-[auto]">
                {
                    countryList.map((country => <Card countryName={country.name} flag={country.flag} region={country.region} />))
                }
            </div>
        </main>
    )
}
export default MainContent