

export const App = () => {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className="h'screen flex justify-center items-center">
        <button className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-950">
          Otro tema leio
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-0 bg-indigo-50 rounded-md shadow-lg">

            <h1 className="bg-white ">
              Hello world!
            </h1>
          </span>
        </div>



        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
      </div>
    </>
  )
}


