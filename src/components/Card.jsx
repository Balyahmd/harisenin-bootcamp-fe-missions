import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function Card({ course }) {
  const formattedPrice = `Rp${course.price / 1000}K`;

  return (
    <Link to={`/course/${course.id}`} className="block h-full">
      <article className="h-full w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 transition-shadow hover:shadow-lg md:p-0">
        <div className="flex flex-row items-stretch gap-3 md:flex-col md:items-start md:gap-0">
          <div className="relative md:w-full md:p-5">
            <img
              src={course.image}
              alt={course.title}
              loading="lazy"
              className="h-22 w-22 rounded-xl object-cover transition-transform duration-300 hover:scale-105 md:h-60 md:w-full md:self-auto"
            />

            <span className="absolute left-6 top-7 hidden rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md md:inline-block">
              {course.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col pl-3 md:p-5 md:pt-0">
            <div className="flex items-start justify-between gap-2 md:block">
              <h3 className="mb-1 line-clamp-2 font-popins text-base font-semibold text-gray-900 md:text-lg">
                {course.title}
              </h3>

              <span className="my-1 w-fit shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-700 md:hidden">
                {course.category}
              </span>
            </div>

            <p className="mb-4 hidden line-clamp-2 font-dm-sans text-base text-gray-500 md:block">
              {course.desc}
            </p>

            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={course.avatar}
                alt={course.mentor}
                className="h-8 w-8 shrink-0 rounded-lg object-cover md:h-10 md:w-10"
              />

              <div className="min-w-0 font-dm-sans leading-tight">
                <p className="truncate text-base font-semibold text-gray-900">
                  {course.mentor}
                </p>

                <p className="truncate text-sm text-gray-500">
                  {course.role}{" "}
                  <span className="font-semibold text-gray-700">
                    {course.company}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-nowrap items-center justify-between gap-2 md:px-5 md:pb-5">
          <div className="flex min-w-0 shrink items-center gap-1">
            <StarRating rating={course.rating} />

            <span className="shrink-0 whitespace-nowrap text-sm text-gray-500 underline">
              {course.rating} ({course.reviews})
            </span>
          </div>

          <span className="shrink-0 whitespace-nowrap font-popins text-xl font-bold text-green-600 md:text-2xl">
            {formattedPrice}
          </span>
        </div>
      </article>
    </Link>
  );
}

export default Card;
