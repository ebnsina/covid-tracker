import Image from "next/image";

const prevntion = [
  { id: 1, text: "Wash your hand", image: "sanitizer.svg" },
  { id: 2, text: "Wear Mask", image: "wear-mask.svg" },
  { id: 3, text: "Avoid Human Contact", image: "no-hand-shake.svg" },
  { id: 4, text: "Maintain body temparature", image: "forehead-tester.svg" },
];

function PreventionPage() {
  return (
    <section className="bg-indigo-500 ">
      <div className="container mx-auto px-8 py-20 min-h-screen flex justify-center items-center flex-col text-white">
        <h2 className="text-3xl font-bold text-center mb-24">
          You can reduce your risk of infection if you..
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {prevntion.map((p) => (
            <div
              key={p.id}
              className="bg-indigo-400 px-4 py-12 rounded-lg relative"
            >
              <div className="absolute left-44 -top-1/3">
                <Image
                  className="rounded-full"
                  src={`/images/${p.image}`}
                  width="70"
                  height="70"
                  alt="Picture of the covid virus"
                />
              </div>
              <h2 className="text-3xl tracking-wider font-semibold text-center">
                {p.text}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PreventionPage;
