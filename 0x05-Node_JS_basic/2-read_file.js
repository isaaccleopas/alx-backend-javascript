const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const students = {};
    const rows = data.split('\n').filter(Boolean);
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const [firstname, lastname, age, field] = row.split(',');
      if (firstname && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    }
    console.log(`Number of students: ${rows.length - 1}`);
    for (const field in students) {
      const stdInField = students[field].length;
      console.log(`Number of students in ${field}: ${stdInField}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
