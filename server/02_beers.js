exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE beers RESTART IDENTITY CASCADE;')
    .then(function() {
      // Inserts seed entries
      return knex('beers').insert(
        [{
            name: '90 minute IPA',
            abv: 9.0,
            person_id: 1
          },
          {
            name: 'Pliney the Elder',
            abv: 8.0,
            person_id: 2
          },
          {
            name: 'Left Hand Milk Stout',
            abv: 5.8,
            person_id: 3
          }
        ]);
    });
};
