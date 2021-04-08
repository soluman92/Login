const uuid = require('uuid');
const users = [
    {
        id:uuid.v4(),
        name:'Ahmed',
        age:25,
        email:'mody11@SpeechGrammarList.com',
        status:'active'
    },{
        id:uuid.v4(),
        name:'mona',
        age:35,
        email:'memo11@SpeechGrammarList.com',
        status:'active'
    },{
        id:uuid.v4(),
        name:'hager',
        age:29,
        email:'gogo11@SpeechGrammarList.com',
        status:'inactive'
    },{
        id:uuid.v4(),
        name:'Doaa',
        age:25,
        email:'dodo22@SpeechGrammarList.com',
        status:'active'
    }
]

module.exports = users;