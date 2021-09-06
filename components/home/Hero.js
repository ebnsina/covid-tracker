import Image from "next/image";

function Hero() {
  return (
    <section className="bg-indigo-500 text-white min-h-screen py-20">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center place-items-center">
        <div>
          <h2 className="text-6xl font-bold">Corona</h2>
          <h3 className="text-2xl font-semibold my-6">
            Virus Disease (COVID-19)
          </h3>
          <p className="leading-loose">
            Pray for coronavirus Victums. This virus was first reported in
            Wuhan, Hubei, China on 17 November 2019, and on 11 March 2020, the
            World Health Organization (WHO) declared the outbreak a pandemic.
          </p>
        </div>
        <div>
          <Image
            className="rounded-full"
            src="/images/COVID-Virus.svg"
            width="400"
            height="400"
            alt="Picture of the covid virus"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
