const express = require('express');
const router = express.Router();

router.post('/clean-people','(req, res) => {
            const people = req.body;

const cleaned = {};
people.forEach(person => { 
            cleaned[person.name] = { 
              age:person.age,
              birthday:person.birthday
            };
});

res.json(cleaned);
});
module.exports = router ;
