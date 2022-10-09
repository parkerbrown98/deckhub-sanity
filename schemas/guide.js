export default {
    name: 'guide',
    type: 'document',
    title: 'Guide',
    fields: [
        {
            name: 'cover',
            type: 'image',
            title: 'Cover'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'user'}]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}