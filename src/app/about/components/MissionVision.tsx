interface Props {
    mission: string;
    vision: string;
}

function MissionVision({ mission, vision }: Props) {
  return (
    <section className="py-16 md:py-20 max-w-[85vw] md:max-w-[70vw] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-20">

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-title font-semibold">
              Misión
            </h2>
            <span className="mt-2 md:mt-4 block h-1 w-14 md:w-28 bg-accent" />
          </div>
          <p className="text-description leading-relaxed text-base md:text-lg lg:text-xl">
            {mission}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-title font-semibold">
              Visión
            </h2>
            <span className="mt-2 md:mt-4 block h-1 w-14 md:w-28 bg-accent" />
          </div>
          <p className="text-description leading-relaxed text-base md:text-lg lg:text-xl">
            {vision}
          </p>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;