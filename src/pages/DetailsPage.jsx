import { Navigate, useParams } from "react-router-dom";

import {
  Video,
  FileText,
  FileBadge,
  ClipboardCheck,
  Globe,
  FilePen,
} from "lucide-react";

import Breadcrumb from "../components/Breadcrumb";
import StarRating from "../components/StarRating";
import Card from "../components/Card";
import CurriculumSection from "../sections/CuriculumSection";

import { buildCourseBreadcrumb } from "../utils/breadscrumb";
import { courses } from "../datas/course";
import Button from "../components/Button";

function DetailsPage() {
  const { id } = useParams();

  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const curriculum = course.curriculum || [];

  const formattedPrice = `Rp${course.price / 1000}K`;

  const formattedOriginalPrice =
    course.originalPrice > course.price
      ? `Rp${course.originalPrice / 1000}K`
      : null;

  const discountPercentage =
    course.originalPrice > course.price
      ? Math.round(
          ((course.originalPrice - course.price) / course.originalPrice) * 100,
        )
      : 0;

  const totalVideos = curriculum.reduce(
    (total, section) =>
      total +
      section.lessons.filter((lesson) => lesson.type === "video").length,
    0,
  );

  const totalDocuments = curriculum.reduce(
    (total, section) =>
      total +
      section.lessons.filter((lesson) => lesson.type === "document").length,
    0,
  );

  const relatedCourses = courses.filter(
    (item) => item.category === course.category && item.id !== course.id,
  );

  return (
    <>
      <div className="mx-auto max-w-380 space-y-6">
        <Breadcrumb items={buildCourseBreadcrumb(course)} />

        <div className="relative flex min-h-100 items-end overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${course.image})`,
            }}
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/20" />

          <div className="relative my-auto max-w-5xl p-7 sm:p-22">
            <h1 className="mb-2 font-popins text-2xl font-bold leading-tight text-white sm:text-4xl">
              {course.title}
            </h1>

            <p className="mb-4 font-dm-sans text-sm text-gray-200 sm:text-base">
              {course.desc}
            </p>

            <div className="flex items-center gap-2">
              <StarRating rating={course.rating} />
              <span className="font-dm-sans text-sm text-gray-200 underline underline-offset-2">
                {course.rating} ({course.reviews})
              </span>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
              <h2 className="mb-4 font-popins text-xl font-semibold text-dark-primary">
                Deskripsi
              </h2>

              <p className="font-dm-sans text-sm md:text-base leading-relaxed text-dark-secondary">
                {course.desc}
              </p>
            </section>

            {curriculum.length > 0 && (
              <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
                <h2 className="mb-2 font-popins text-xl font-bold text-gray-900">
                  Kamu akan Mempelajari
                </h2>

                <div>
                  {curriculum.map((section, idx) => (
                    <CurriculumSection
                      key={section.title}
                      section={section}
                      defaultOpen={idx === 0}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 font-popins text-lg font-bold leading-snug text-gray-900">
              {course.title}
            </h3>

            <div className="mb-1 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-popins text-lg font-bold text-main-primary">
                  {formattedPrice}
                </span>

                {formattedOriginalPrice && (
                  <span className="text-sm text-dark-secondary line-through">
                    {formattedOriginalPrice}
                  </span>
                )}
              </div>

              {discountPercentage > 0 && (
                <span className="rounded-lg bg-main-secondary px-2 py-0.5 text-xs font-semibold text-white">
                  Diskon {discountPercentage}%
                </span>
              )}
            </div>

            {course.offerNote && (
              <p className="mb-4 font-dm-sans text-sm font-medium text-info">
                {course.offerNote}
              </p>
            )}

            <Button variant="primary">Beli Sekarang</Button>

            <p className="my-3 font-popins text-sm font-semibold text-gray-800">
              Kelas Ini Sudah Termasuk
            </p>

            <ul className="mb-5 grid grid-cols-2 gap-y-2.5">
              <li className="flex items-center gap-2 font-dm-sans text-sm text-dark-secondary">
                <ClipboardCheck className="h-4 w-4 text-dark-secondary" />
                Ujian Akhir
              </li>

              <li className="flex items-center gap-2 font-dm-sans text-sm text-dark-secondary">
                <FileText className="h-4 w-4 text-dark-secondary" />
                {totalDocuments} Dokumen
              </li>

              <li className="flex items-center gap-2 font-dm-sans text-sm text-dark-secondary">
                <FilePen className="h-4 w-4 text-dark-secondary" />
                Pretest
              </li>

              <li className="flex items-center gap-2 font-dm-sans text-sm text-dark-secondary">
                <Video className="h-4 w-4 text-dark-secondary" />
                {totalVideos} Video
              </li>

              <li className="flex items-center gap-2 font-dm-sans text-sm text-dark-secondary">
                <FileBadge className="h-4 w-4 text-dark-secondary" />
                Sertifikat
              </li>
            </ul>

            <p className="mb-2 font-popins text-sm font-semibold text-dark-primary">
              Bahasa Pengantar
            </p>

            <p className="flex items-center gap-2 font-dm-sans text-sm text-dark-secondary">
              <Globe className="h-4 w-4 text-dark-secondary" />
              Bahasa Indonesia
            </p>
          </aside>
        </div>

        {relatedCourses.length > 0 && (
          <section>
            <h2 className="font-popins text-3xl font-bold text-gray-900">
              Video Pembelajaran Terkait Lainnya
            </h2>

            <p className="mb-5 font-dm-sans text-base text-gray-500">
              Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
            </p>

            <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
              {relatedCourses.map((item) => (
                <Card key={item.id} course={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default DetailsPage;
