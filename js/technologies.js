$(document).ready(function () {
  const data = {
    Backend: [
      { technology: "PHP", image: "assets/technologies/backend/php.svg" },
      { technology: "Ruby", image: "assets/technologies/backend/ruby.svg" },
      {
        technology: "Node.js",
        image: "assets/technologies/backend/nodejs.svg",
      },
    ],
    Frontend: [
      { technology: "React", image: "assets/technologies/frontend/react.svg" },
      {
        technology: "Angular",
        image: "assets/technologies/frontend/angular.svg",
      },
      { technology: "HTML", image: "assets/technologies/frontend/html.svg" },
      { technology: "CSS", image: "assets/technologies/frontend/css.svg" },
      {
        technology: "JavaScript",
        image: "assets/technologies/frontend/javascript.svg",
      },
      {
        technology: "TypeScript",
        image: "assets/technologies/frontend/typescript.svg",
      },
    ],
    Databases: [
      { technology: "MySQL", image: "assets/technologies/databases/mysql.svg" },
      {
        technology: "PostgreSQL",
        image: "assets/technologies/databases/postgresql.svg",
      },
      {
        technology: "Microsoft SQL Server",
        image: "assets/technologies/databases/microsoftsqlserver.svg",
      },
      {
        technology: "SQLite",
        image: "assets/technologies/databases/sqlite.svg",
      },
      {
        technology: "MariaDB",
        image: "assets/technologies/databases/mariadb.svg",
      },
      {
        technology: "MongoDB",
        image: "assets/technologies/databases/mongodb.svg",
      },
      { technology: "Redis", image: "assets/technologies/databases/redis.svg" },
      {
        technology: "Elasticsearch",
        image: "assets/technologies/databases/elasticsearch.svg",
      },
    ],
    DevOps: [
      { technology: "AWS", image: "assets/technologies/devops/aws.svg" },
      { technology: "GCP", image: "assets/technologies/devops/gcp.svg" },
      { technology: "Docker", image: "assets/technologies/devops/docker.svg" },
      {
        technology: "Jenkins",
        image: "assets/technologies/devops/jenkins.svg",
      },
      { technology: "Linux", image: "assets/technologies/devops/linux.svg" },
      { technology: "Git", image: "assets/technologies/devops/git.svg" },
      {
        technology: "Bitbucket",
        image: "assets/technologies/devops/bitbucket.svg",
      },
    ],
    "AI&ML": [
      { technology: "Python", image: "assets/technologies/aiml/python.svg" },
      {
        technology: "TensorFlow",
        image: "assets/technologies/aiml/tensorflow.svg",
      },
      { technology: "PyTorch", image: "assets/technologies/aiml/pytorch.svg" },
    ],
    Testing: [
      {
        technology: "PHPUnit",
        image: "assets/technologies/testing/phpunit.svg",
      },
      { technology: "RSpec", image: "assets/technologies/testing/rspec.svg" },
      { technology: "Jest", image: "assets/technologies/testing/jest.svg" },
      {
        technology: "Swagger",
        image: "assets/technologies/testing/swagger.svg",
      },
      {
        technology: "Postman",
        image: "assets/technologies/testing/postman.svg",
      },
      {
        technology: "Selenium",
        image: "assets/technologies/testing/selenium.svg",
      },
    ],
    "Project Management": [
      {
        technology: "Atlassian",
        image: "assets/technologies/pm/atlassian.svg",
      },
      { technology: "Asana", image: "assets/technologies/pm/asana.svg" },
      { technology: "Monday", image: "assets/technologies/pm/monday.svg" },
      { technology: "Slack", image: "assets/technologies/pm/slack.svg" },
      { technology: "Discord", image: "assets/technologies/pm/discord.svg" },
      { technology: "Notion", image: "assets/technologies/pm/notion.svg" },
      { technology: "PowerBI", image: "assets/technologies/pm/powerbi.svg" },
      {
        technology: "Diagramming",
        image: "assets/technologies/pm/diagramming.svg",
      },
    ],
    "UI/UX": [
      { technology: "Figma", image: "assets/technologies/uiux/figma.svg" },
      { technology: "Zeplin", image: "assets/technologies/uiux/zeplin.svg" },
      {
        technology: "Inkscape",
        image: "assets/technologies/uiux/inkscape.svg",
      },
      { technology: "Blender", image: "assets/technologies/uiux/blender.svg" },
      { technology: "Gimp", image: "assets/technologies/uiux/gimp.svg" },
    ],
  };

  // Function to load technologies based on category

  let categories = Object.keys(data);
  let currentIndex = 0;

  // Function to load technologies based on category
  function loadTechnologies(category) {
    const technologies = data[category];
    const $technologyList = $("#technology-list");
    $technologyList.empty(); // Clear current items

    technologies.forEach((item, index) => {
      const techItem = `
                <div class="col-md-4 tech-item text-white">
                    <img src="${item.image}" alt="${item.technology}" class="tech-icon">
                    <p>${item.technology}</p>
                </div>
            `;
      const $techItem = $(techItem);
      $technologyList.append($techItem);

      // Apply animation with delay
      setTimeout(() => {
        $techItem.addClass("show");
      }, index * 100); // Delay each item's animation for a cascading effect
    });
  }

  // Function to switch category
  function switchCategory(index) {
    const category = categories[index];
    $("#category-list .list-group-item").removeClass("active-category");
    $(`#category-list .list-group-item[data-category="${category}"]`).addClass(
      "active-category"
    );
    loadTechnologies(category);
  }

  // Handle category click
  $("#category-list").on("click", ".list-group-item", function () {
    clearInterval(autoSwitchInterval);

    const category = $(this).data("category");
    currentIndex = categories.indexOf(category);
    switchCategory(currentIndex);

    autoSwitchInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % categories.length;
      switchCategory(currentIndex);
    }, 5000);
  });

  // Start with the first category
  switchCategory(currentIndex);

  // Automatically switch categories every 5 seconds
  let autoSwitchInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % categories.length;
    switchCategory(currentIndex);
  }, 5000);
});
