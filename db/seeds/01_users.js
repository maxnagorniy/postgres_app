
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {   id: 1,
            title: 'title 1',
            user_id: 3
        },
        {   id: 2,
            title: 'title 2',
            user_id: 3
        },
        {   id: 3,
            title: 'title 3',
            user_id: 3
        },
        {   id: 4,
            title: 'title 4',
            user_id: 4
        }
      ]);
    });
};
