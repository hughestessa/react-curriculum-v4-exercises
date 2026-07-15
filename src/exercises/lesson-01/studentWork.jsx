//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let name = 'Tessa Hughes';
  let age = '35';
  let hobbies = [
    'Exercising',
    'Nature Walks',
    'Reading',
    'Making Jam',
    'Traveling',
  ];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        Hi! My name is {name}. I am currently {age} years old and live in
        Alabama. I work as a Sr. Business Analyst during the day and am learning
        to code in the evenings.
      </p>
      <p>My hobbies include:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
