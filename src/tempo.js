const { ScalarClient } = require('../dist/index')

const client = new ScalarsClient()

const profileSelect = {
    id: true,
    description: true
}

client.query
    .profile(profileSelect, {
        email: 'luis@madrov.com'
    })
    .then( res => console.log( res ) )
