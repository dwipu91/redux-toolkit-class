import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../fretures/student/studentApiSlice";
import { selectStudent } from "../fretures/student/studentSlice";

const Student = () => {
  const dispatch = useDispatch();
  const { error, loading, message, student } = useSelector(selectStudent);

  // state for forms
  const [input, setInput] = useState({
    name: "",
    email: "",
    roll: "",
    location: "",
  });
  const [edit, setEdit] = useState(false);
  // handle input change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleCreateStudent
  const handleCreateStudent = () => {
    if (edit) {
      dispatch(updateStudent(input));
    } else {
      dispatch(createStudent(input));
    }
    setInput({
      name: "",
      email: "",
      roll: "",
      location: "",
    });
  };

  // edit student
  const handleStudentEdit = (data) => {
    setInput(data);
    setEdit(true);
  };
  //
  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  return (
    <>
      {loading && <h1>Loading........</h1>}
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        onChange={handleInputChange}
        name="name"
      />
      <input
        type="text"
        name="roll"
        placeholder="Roll"
        value={input.roll}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={input.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Location"
        value={input.location}
        name="location"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Photo"
        value={input.photo}
        name="photo"
        onChange={handleInputChange}
      />

      <button onClick={handleCreateStudent}>
        {edit ? "Update" : "Add student"}
      </button>
      <hr />
      <ul>
        {student.length > 0
          ? student.map((item, index) => {
              return (
                <li key={index}>
                  {item.name} -{" "}
                  <img
                    src={item.photo}
                    style={{
                      width: "150px",
                      height: "160px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                  <button onClick={() => dispatch(deleteStudent(item.id))}>
                    x
                  </button>
                  <button onClick={() => handleStudentEdit(item)}>e</button>
                </li>
              );
            })
          : "no data found"}
      </ul>
    </>
  );
};

export default Student;
