import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'seoGroup',
      title: 'SEO Settings',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Optimize for search engines. Aim for 150-160 characters.',
          validation: (Rule) => Rule.max(160).warning('Meta description should ideally be under 160 characters.'),
        }),
        defineField({
          name: 'ogTitle',
          title: 'Open Graph Title',
          type: 'string',
          description: 'Custom title for social media sharing (e.g., Facebook, Twitter). If empty, the main title will be used.',
        }),
        defineField({
          name: 'ogDescription',
          title: 'Open Graph Description',
          type: 'text',
          rows: 3,
          description: 'Custom description for social media sharing. If empty, the meta description or an excerpt might be used.',
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Custom image for social media sharing (recommended size: 1200x630px). If empty, the main image might be used.',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
