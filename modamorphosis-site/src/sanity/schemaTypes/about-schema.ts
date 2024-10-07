import { title } from "process";

export const aboutSchema = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "pageTitle", // Add this new field
      title: "Name", // This is the title that will be displayed in Sanity Studio
      type: "string",
    },
    {
      name: "person",
      title: "Info",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "title1",
          title: "Title 1",
          type: "string",
        },
        {
          name: "title2",
          title: "Title 2",
          type: "string",
        },
        {
          name: "quote",
          title: "Quote",
          type: "string",
        },
        {
          name: "bio",
          title: "Biography",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "image",
          title: "Profile Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "pageTitle", // Use the pageTitle field for the preview title
    },
  },
};
