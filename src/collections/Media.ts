// src/collections/Media.ts
import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    mimeTypes: ['image/*'], // Only allow image files
  },
  fields: [
    {
      name: 'altText',
      type: 'text',
      label: 'Alt Text',
    },
  ],
};

export default Media;
