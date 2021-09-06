import { useEffect, useState } from "react";

function CountryPage({ countries }) {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({});

  useEffect(() => {
    getInitialDate();
  }, []);

  const getInitialDate = async (e) => {
    const endpoint = "https://coronavirus-19-api.herokuapp.com/countries/World";

    try {
      setIsLoading(true);
      const res = await fetch(endpoint);
      const data = await res.json();
      setCountry(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleSelect = async (e) => {
    const endpoint = "https://coronavirus-19-api.herokuapp.com";

    try {
      setIsLoading(true);
      const res = await fetch(`${endpoint}/countries/${e.target.value}`);
      const data = await res.json();
      setCountry(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-indigo-500 text-white min-h-screen py-20">
      <div className="container mx-auto px-8">
        <div className="flex justify-end mb-6">
          <select
            onChange={handleSelect}
            name="country"
            id="country"
            className="border border-gray-200 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {countries.map((c) => (
              <option key={c.country} value={c.country}>
                {c.country}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white text-indigo-600 rounded-2xl p-6 max-w-2xl mx-auto">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div>
              <h2 className="text-4xl font-semibold text-center mb-8">
                {country.country}
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl">{country.cases}</p>
                  <span className="text-xs uppercase">Total Cases</span>
                </div>
                <div>
                  <p className="text-2xl">{country.todayCases}</p>
                  <span className="text-xs uppercase">Today Cases</span>
                </div>
                <div>
                  <p className="text-2xl">{country.deaths}</p>
                  <span className="text-xs uppercase">Total Deaths</span>
                </div>
                <div>
                  <p className="text-2xl">{country.todayDeaths}</p>
                  <span className="text-xs uppercase">Today Deaths</span>
                </div>
                <div>
                  <p className="text-2xl">{country.recovered}</p>
                  <span className="text-xs uppercase">Recovered</span>
                </div>
                <div>
                  <p className="text-2xl">{country.critical}</p>
                  <span className="text-xs uppercase">Critical</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CountryPage;

export async function getServerSideProps() {
  const endpint = "https://coronavirus-19-api.herokuapp.com";

  const res = await fetch(`${endpint}/countries`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      countries: data,
    },
  };
}
