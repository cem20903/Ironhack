const roles = require('../models/roles')
const bcrypt = require('bcrypt')
const salt = 10

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const saltHass = bcrypt.genSaltSync(salt)
  

  const users = [

    {
      username: "david",
      password: bcrypt.hashSync("david123",saltHass),
      role: "Boss"
    },
    {
      username: "jose",
      password: bcrypt.hashSync("jose123",saltHass),
      role: "Developer"
    },
    {
      username: "puigdemont",
      password:bcrypt.hashSync("puigdemont",saltHass),
      role: "TA"
    }


  ]


  roles.insertMany(users)
  .then(()=>{

    console.log("Insertado")

  })