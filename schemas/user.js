import { MdOutlinePermIdentity } from 'react-icons/md';

export default {
    name: 'user',
    type: 'document',
    title: 'User',
    icon: MdOutlinePermIdentity,
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        }
    ]
}