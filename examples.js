function variablesExample() {
  console.log(true);
  console.info("page loaded");
  console.debug(5 - 2);
  console.warn(10 / 2);
  console.error("hello" + " there");

  var employed = false;
  var age = 11;
  var name = "Elias";
  console.info("I'm employed", employed);
  console.info(typeof employed);
  console.warn("age", age, typeof age);
  console.info("My name is", name, typeof name);

  age = "18";
  console.warn("age", age, typeof age);

  age = false;
  console.warn("age", age, typeof age);

  var skills = ["HTML", "CSS", "Javascript", "Python"];
  console.debug(skills, typeof skills);

  var person = {
    employed: true,
    age: 29,
  };
  console.info(person, person.age, typeof person);
}

function jsonWithFunctions() {
  console.log(typeof variablesExample);
console.log(typeof document);
console.log(typeof document.getElementById);

var person = {
  age: 29,
  name: "Nick",
  learn: function () {
    console.info("I'm learning JS, I love it");
  },
  play: function () {
    console.info("I'm playing. My name is ", this.name);
  },
};
person.learn();
person.play();
var action = "learn" //learn
person[action]();
}

function updateTitle() {
  var jobTitle = document.getElementById("job-title");
  console.warn(jobTitle, typeof jobTitle);
  console.info(jobTitle.innerHTML);
}
variablesExample;

updateTitle();

jsonWithFunctions();