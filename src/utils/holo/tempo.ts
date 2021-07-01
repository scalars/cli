import { ScalarsClient } from './newIndex'

const client: ScalarsClient = new ScalarsClient()


client.queries.getProfile(
    {
        id: true,
        description: true,
        email: true,
        user: {
            id: true
        }
    },
    {
        email: 'luis@madrov.com'
    },
)

client.queries.getSkills( {
    id: true
} )

