exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resource").insert([
        { name: "Computer", description: "A coder's main tool." },
        {
          name: "Coding Skill",
          description:
            "The ability to code in multiple coding languages and environments."
        },
        {
          name: "VS Code",
          description: "A very great IDE for developers"
        },
        {
          name: "Portfolio",
          description: "Show off what you made!"
        }
      ]);
    });
};