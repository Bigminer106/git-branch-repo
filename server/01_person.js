exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('TRUNCATE person RESTART IDENTITY CASCADE;')
      .then(function() {
          // Inserts seed entries
          return knex('person').insert([{
                name: 'Alex Read'
              },
              {
                name: 'Matthew Victor'
              },
              {
                name: 'Adam Miner'
              ]);
          });
      };
