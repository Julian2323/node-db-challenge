exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("project").insert([
        {
          name: "Create an API",
          description:
            "Using your programming skills, create a viable backend to return queried information on specified endpoints."
        },
        {
          name: "Graduate Lambda School",
          description:
            "Because of your awesome skills."
        }
      ]);
    });
};