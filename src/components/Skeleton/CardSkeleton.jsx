// components/CardSkeleton.jsx
function CardSkeleton() {
  return (
    <article className="h-full w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 md:p-0 animate-pulse">
      <div className="flex flex-row items-stretch gap-3 md:flex-col md:items-start md:gap-0">
        <div className="relative md:w-full md:p-5">
          <div className="h-22 w-22 rounded-xl bg-gray-200 md:h-60 md:w-full" />
        </div>

        <div className="flex flex-1 flex-col pl-3 md:p-5 md:pt-0">
          <div className="mb-2 h-4 w-3/4 rounded bg-gray-200 md:h-5" />
          <div className="mb-4 hidden h-4 w-full rounded bg-gray-200 md:block" />
          <div className="mb-4 hidden h-4 w-2/3 rounded bg-gray-200 md:block" />

          <div className="flex items-center gap-2 md:gap-3">
            <div className="h-8 w-8 shrink-0 rounded-lg bg-gray-200 md:h-10 md:w-10" />

            <div className="min-w-0 flex-1">
              <div className="mb-1 h-3 w-24 rounded bg-gray-200" />
              <div className="h-3 w-32 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 md:px-5 md:pb-5">
        <div className="h-4 w-20 rounded bg-gray-200" />
        <div className="h-6 w-16 rounded bg-gray-200" />
      </div>
    </article>
  );
}

export default CardSkeleton;