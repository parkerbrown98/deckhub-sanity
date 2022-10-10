import { MdOutlineEditNote } from 'react-icons/md';

export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    icon: MdOutlineEditNote,
    fields: [
        {
            name: 'cover',
            type: 'coverImage',
            title: 'Cover Image'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.max(20).warning('Shorter titles are usually better')
        },
        {
            name: 'excerpt',
            type: 'text',
            title: 'Excerpt',
            description: 'Describe the post. Shows up under the link in Google.',
            validation: Rule => Rule.required()
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'user'}],
            validation: Rule => Rule.required()
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: 'This is the URL friendly version of the title.',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category.title',
            media: 'cover'
        }
    }
}