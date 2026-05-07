var query = "SELECT name,id FROM Users WHERE login = :login";
db.sequelize.query(query, {
  replacements: {
    login: req.body.login
  },
  model: db.User
}).then(user => {
  // existing code remains the same
})