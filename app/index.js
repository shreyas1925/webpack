const pocketbook = {
  name: "Course Registered",
  date: "2023-10-2",
  courses: [
    { name: "ReactJS", certificate: "NO" },
    { name: "K8S", certificate: "YES" },
  ],
};

console.log(pocketbook.name);
console.log(pocketbook.courses[0]);

const { name, date, courses } = pocketbook;

console.log(date);

module.exports = pocketbook;
