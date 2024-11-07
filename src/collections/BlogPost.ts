// src/collections/BlogPost.ts
import { CollectionConfig } from 'payload/types'; // Importing the type for defining a collection configuration

// Define the collection configuration for 'BlogPost'
const BlogPost: CollectionConfig = {
  slug: 'blog-posts', // The identifier used for API routes and in the admin panel
  labels: {
    singular: 'Blog Post', // Singular label used in the admin panel
    plural: 'Blog Posts',  // Plural label used in the admin panel
  },
  admin: {
    useAsTitle: 'title', // Field to use as the display title for items in the admin panel
  },
  fields: [
    // Array of field definitions for this collection
    {
      name: 'title', // Name of the field, used as the key in the database and API
      type: 'text',  // The type of field; 'text' is used for single-line input
      label: 'Title', // Label displayed in the admin panel
      required: true, // Indicates that this field must be filled out before saving
    },
    {
      name: 'content',
      type: 'richText', // A field that supports formatted text, images, and embeds
      label: 'Content',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship', // Creates a relationship to another collection
      relationTo: 'users',  // The collection this field references
      label: 'Author',
      required: true,
    },
    {
      name: 'publishDate',
      type: 'date', // Field for selecting a date
      label: 'Publish Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly', // Configures the date picker to show only days
        },
      },
    },
    {
      name: 'tags',
      type: 'array', // Field type for an array of items
      label: 'Tags',
      fields: [
        {
          name: 'tag', // Name for each item in the array
          type: 'text',
          label: 'Tag',
        },
      ],
    },
    {
      name: 'coverImage',
      type: 'upload', // Field type for uploading files
      relationTo: 'media', // Collection to upload files to; typically a 'media' collection
      label: 'Cover Image',
    },
  ],
};

export default BlogPost; // Exporting the collection configuration to be used in payload.config.ts
