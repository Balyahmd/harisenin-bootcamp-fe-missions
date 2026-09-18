const parseCurriculum = (field) => {
  const sections = field?.arrayValue?.values || [];

  return sections.map((section) => {
    const fields = section.mapValue.fields;

    const lessons = fields.lesson?.arrayValue?.values || [];

    return {
      title: fields.title?.stringValue || "",

      lessons: lessons.map((lesson) => {
        const lessonFields = lesson.mapValue.fields;

        return {
          title: lessonFields.title?.stringValue || "",
          type: lessonFields.type?.stringValue || "",
          duration: Number(lessonFields.duration?.integerValue || 0),
        };
      }),
    };
  });
};

const parseCourse = (document) => {
  const fields = document.fields;

  return {
    id: document.name.split("/").pop(),

    title: fields.title?.stringValue || "",
    desc: fields.desc?.stringValue || "",
    image: fields.image?.stringValue || "",
    avatar: fields.avatar?.stringValue || "",

    mentor: fields.mentor?.stringValue || "",
    role: fields.role?.stringValue || "",
    company: fields.company?.stringValue || "",

    category: fields.category?.stringValue || "",

    rating: Number(fields.rating?.doubleValue || 0),
    reviews: Number(fields.reviews?.integerValue || 0),

    price: Number(fields.price?.doubleValue || fields.price?.integerValue || 0),

    originalPrice: Number(
      fields.originalPrice?.doubleValue ||
        fields.originalPrice?.integerValue ||
        0,
    ),

    discountLabel: Number(
      fields.discountLabel?.integerValue ||
        fields.discountLabel?.doubleValue ||
        0,
    ),

    curriculum: parseCurriculum(fields.curriculum),
  };
};

const courseToFirestore = (course) => {
  return {
    fields: {
      title: {
        stringValue: course.title || "",
      },

      desc: {
        stringValue: course.desc || "",
      },

      image: {
        stringValue: course.image || "",
      },

      avatar: {
        stringValue: course.avatar || "",
      },

      mentor: {
        stringValue: course.mentor || "",
      },

      role: {
        stringValue: course.role || "",
      },

      company: {
        stringValue: course.company || "",
      },

      category: {
        stringValue: course.category || "",
      },

      rating: {
        doubleValue: Number(course.rating) || 0,
      },

      reviews: {
        integerValue: Number(course.reviews) || 0,
      },

      price: {
        doubleValue: Number(course.price) || 0,
      },

      originalPrice: {
        doubleValue: Number(course.originalPrice) || 0,
      },

      discountLabel: {
        integerValue: Number(course.discountLabel) || 0,
      },

      curriculum: {
        arrayValue: {
          values: (course.curriculum || []).map((section) => ({
            mapValue: {
              fields: {
                title: {
                  stringValue: section.title || "",
                },

                lesson: {
                  arrayValue: {
                    values: (section.lessons || []).map((lesson) => ({
                      mapValue: {
                        fields: {
                          title: {
                            stringValue: lesson.title || "",
                          },

                          type: {
                            stringValue: lesson.type || "",
                          },

                          duration: {
                            integerValue: Number(lesson.duration) || 0,
                          },
                        },
                      },
                    })),
                  },
                },
              },
            },
          })),
        },
      },
    },
  };
};

export {parseCourse, courseToFirestore}