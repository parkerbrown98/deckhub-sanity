export default {
    widgets: [
        {
            name: 'document-list',
            options: {
                title: 'Recent posts',
                order: '_updatedAt',
                types: ['post']
            }
        },
        {
            name: 'project-info'
        },
        {
            name: 'project-users'
        }
    ]
}