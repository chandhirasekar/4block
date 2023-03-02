import "./App.css";
import { useState } from "react";
// import Create from './component/Create';
// import Node from './component/Node'
import Input from "./component/Input";


function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });
  const [show, setShow] = useState(false);
  const {username, email, birthday, password, confirmpassword} = data
  const input = [
    {
      id: 1,
      type: "text",
      label: "Username",
      placeholder: "username",
      name: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      error:"username should be 3-16 characters ",
      required: true,
    },
    {
      id: 2,
      type: "email",
      label: "Email ",
      placeholder: "email",
      name: "email",
      required: true,
    },
    {
      id: 3,
      type: "date",
      label: "Birthday",
      placeholder: "birthday",
      name: "birthday",
    },
    {
      id: 4,
      type: "password",
      label: "password",
      placeholder: "password",
      name: "password",
      error:"password should be 8-20 at least 1letter 1Special 1number",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 5,
      type: "password",
      label: "Confirmpassword",
      placeholder: "confirmpassword",
      name: "confirmpassword",
      error:"password doesnot match",
      value: "confirmpassword",
      pattern:data.password
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    setData((pre) => {
      return { ...pre, data };
    });
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login form</h1>
        {input.map((inputs) => (
          <Input key={inputs.id}{...inputs} value={data[input.name]} onChange={onChange} />
        ))}
        <button type="submit">Submit</button>
      </form>
      {show && <h1>{username}</h1>}
    </div>
  );
}

export default App;
