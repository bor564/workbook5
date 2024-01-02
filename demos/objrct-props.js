let person = {
    first: "Thomas",
    middle: "Alva",
    last: "Edison",
}

for (const propertyName in person) {
    console.log(person[propertyName]);
  }