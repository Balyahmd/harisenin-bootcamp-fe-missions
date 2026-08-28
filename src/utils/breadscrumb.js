export function buildCourseBreadcrumb(course) {
  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return [
    {
      label: "Beranda",
      href: "/beranda",
    },
    {
      label: course.category,
      href: `/kategori/${slugify(course.category)}`,
    },
    {
      label: course.title,
      href: course.title,
    },
  ];
}
