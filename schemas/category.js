import { MdFolder } from "react-icons/md"

export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    icon: MdFolder,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.max(50).warning('Shorter titles are usually better')
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description'
        }
    }
}