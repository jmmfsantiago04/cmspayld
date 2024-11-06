// src/collections/Gallery.ts
import { CollectionConfig } from 'payload/types';

const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'Photo',
    plural: 'Photos',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'photo',
      type: 'upload',
      label: 'Photo',
      relationTo: 'media', // References the Media collection for uploads
      required: true,
    },
  ],
};

export default Gallery;
