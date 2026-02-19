interface Props {
    mission: string;
    vision: string;
}

function MissionVision({ mission, vision }: Props) {
  return (
    <section className="mx-10 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-20">

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Misión
            </h2>
            <span className="mt-2 md:mt-4 block h-1 w-14 md:w-28 bg-neutral-500" />
          </div>
          <p className="text-white leading-relaxed text-base md:text-lg lg:text-xl">
            {mission}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Visión
            </h2>
            <span className="mt-2 md:mt-4 block h-1 w-14 md:w-28 bg-neutral-500" />
          </div>
          <p className="text-white leading-relaxed text-base md:text-lg lg:text-xl">
            {vision}
          </p>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;