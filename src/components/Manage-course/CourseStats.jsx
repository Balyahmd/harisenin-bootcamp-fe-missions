import { useMemo } from "react";
import { BookOpen, Users, Tag, Wallet } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

const STAT_ITEMS = [
  {
    key: "totalCourse",
    label: "Total Course",
    icon: BookOpen,
    iconClass: "bg-green-50 text-green-600",
  },
  {
    key: "totalMentor",
    label: "Total Mentor",
    icon: Users,
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    key: "totalCategory",
    label: "Total Kategori",
    icon: Tag,
    iconClass: "bg-amber-50 text-amber-600",
  },
  {
    key: "totalValue",
    label: "Total Nilai Course",
    icon: Wallet,
    iconClass: "bg-yellow-50 text-yellow-700",
  },
];


export default function CourseStats({ courses = [], loading = false }) {
  const stats = useMemo(() => {
    const totalCourse = courses.length;

    const mentorSet = new Set(courses.map((c) => c.mentor).filter(Boolean));
    const totalMentor = mentorSet.size;

    const categorySet = new Set(courses.map((c) => c.category).filter(Boolean));
    const totalCategory = categorySet.size;

    const totalValue = courses.reduce(
      (sum, c) => sum + Number(c.price || 0),
      0
    );

    return { totalCourse, totalMentor, totalCategory, totalValue };
  }, [courses]);

  const displayValues = {
    totalCourse: stats.totalCourse,
    totalMentor: stats.totalMentor,
    totalCategory: stats.totalCategory,
    totalValue: formatCurrency(stats.totalValue),
  };

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STAT_ITEMS.map(({ key, label, icon: Icon, iconClass }) => (
        <div
          key={key}
          className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconClass}`}
          >
            <Icon className="h-5 w-5" />
          </span>

          <div className="mt-4">
            {loading ? (
              <div className="h-7 w-16 animate-pulse rounded bg-gray-100" />
            ) : (
              <p className="text-2xl font-bold tracking-tight text-gray-900">
                {displayValues[key]}
              </p>
            )}
            <p className="mt-1 text-sm text-gray-500">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}