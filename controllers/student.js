async function getAllStudents(req, res) {

  // res.status(500).json({
  //   message : "can not get student "
  // })

  res.status(200).json({
    message: "get student successfully",
    data: [
      {
        name: "nguyen quang vinh",
        age: 24,
        email: "vinh140999@hmail.com",
      },
      {
        name: "nguyen quang vinh1",
        age: 24,
        email: "vinh140999@hmail.com",
      },
      {
        name: "nguyen quang vinh2",
        age: 24,
        email: "vinh140999@hmail.com",
      },
      {
        name: "nguyen quang vinh3",
        age: 24,
        email: "vinh140999@hmail.com",
      },
    ],
  });
}

async function getStudentByID(req, res) {}

async function updateStudent(req, res) {}

async function insertStudent(req, res) {}

export default {
  getAllStudents,
  getStudentByID,
  updateStudent,
  insertStudent,
};
