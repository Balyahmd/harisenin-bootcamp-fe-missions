function DetailsSkeleton() {
  return (
    <div className="animate-pulse">

      <div className="mb-6 flex gap-2">
        <div className="h-4 w-20 rounded bg-gray-200" />
        <div className="h-4 w-4 rounded bg-gray-200" />
        <div className="h-4 w-32 rounded bg-gray-200" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
    
        <div className="aspect-video rounded-2xl bg-gray-200" />

        <div className="space-y-5">
          <div className="h-8 w-3/4 rounded bg-gray-200" />

          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>

   
          <div className="flex gap-3">
            <div className="h-5 w-24 rounded bg-gray-200" />
            <div className="h-5 w-20 rounded bg-gray-200" />
          </div>

     
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-200" />

            <div className="space-y-2">
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-3 w-24 rounded bg-gray-200" />
            </div>
          </div>

   
          <div className="space-y-3">
            <div className="h-8 w-32 rounded bg-gray-200" />
            <div className="h-12 w-full rounded-full bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <div className="h-6 w-40 rounded bg-gray-200" />

        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-4/5 rounded bg-gray-200" />
        </div>
      </div>

      <div className="mt-12 space-y-5">
        <div className="h-6 w-48 rounded bg-gray-200" />

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-gray-200 p-5"
          >
            <div className="h-5 w-1/2 rounded bg-gray-200" />

            <div className="mt-4 space-y-3">
              <div className="h-12 w-full rounded bg-gray-200" />
              <div className="h-12 w-full rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>


      <div className="mt-12">
        <div className="mb-5 h-6 w-48 rounded bg-gray-200" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              <div className="aspect-video bg-gray-200" />

              <div className="space-y-3 p-4">
                <div className="h-5 w-4/5 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-2/3 rounded bg-gray-200" />
                <div className="h-5 w-24 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsSkeleton;