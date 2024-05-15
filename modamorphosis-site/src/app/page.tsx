import ConstructionLanding from "./components/contruction-landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-purple-swirl bg-cover bg-center">
      <div className="absolute top-0 left-0">
        <ConstructionLanding />
      </div>
      <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full">
        <img
          src="/img/logo_color3.png"
          alt="Modamorphosis"
          className="max-h-[75vh] max-w-[80vw]"
        />
        <h1 className="font-millionaire text-[2.5rem] text-[#fd702e]">
          COMING SOON
        </h1>
      </div>
    </main>
  );
}
