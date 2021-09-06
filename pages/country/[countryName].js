function Country({ country }) {
  return (
    <div>
      <pre>{JSON.stringify(country)}</pre>
    </div>
  );
}

export default Country;

export async function getServerSideProps(context) {
  const { countryName } = context.params;

  const endpint = "https://coronavirus-19-api.herokuapp.com";

  const res = await fetch(`${endpint}/countries/${countryName}`);
  const data = await res.json();

  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      country: data,
    },
  };
}
