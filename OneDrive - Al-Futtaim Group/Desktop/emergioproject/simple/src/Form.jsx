
import Display from "./Display";
import { useState } from "react";
import "./App.css";

const Form = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [focus, setfocus] = useState(false);
  const fun1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
    const sub = (e) => {
      e.preventDefault();

    };
  const handlefocus = () => {
    setfocus(true);
  };
  return (
    <div>
      <form>
        {/* onSubmit={sub} */}
        <div className="box">
          <label>Username</label>
          <br></br>
          <input
            type="text"
            placeholder="enter name"
            name="username"
            value={input.username}
            pattern="^[A-Za-z0-9],{2-16}"
            onChange={fun1}
            onBlur={handlefocus}
            focus={focus.toString()}
            required
          />
          <br></br>
          <span>Username should have 6-15 characters</span>
          {/* {input.username} */}
          <br></br>
          <label>Email</label>
          <br></br>
          <input
            type="email"
            placeholder="enter email"
            name="email"
            value={input.email}
            onChange={fun1}
            onBlur={handlefocus}
            focus={focus.toString()}
            required
          />
          <br></br>
          <span>enter valid email</span>

          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            pattern='{(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"}'
            //pattern={/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/}

            value={input.password}
            onChange={fun1}
            onBlur={handlefocus}
            focus={focus.toString()}
            required
          />
          <br></br>
          <span>password must be atleast 12 characters long</span>
          {/* {input.password} */}
          <br></br>
          <label>Confirm</label>
          <br></br>
          <input
            type="password"
            placeholder="confirm password"
            name="confirm"
            value={input.confirm}
            pattern={input.password}
            onChange={fun1}
            onBlur={handlefocus}
            focus={focus.toString()}
            required
          />
          <br></br>
          <span>password is not matching</span>
          {/* {input.confirm} */}
          <br></br>
          <br></br>
          {/* <Link to="/dis"> */}
            {" "}
          
            <button
              style={{
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "10px",
                color: "white",
              }}
           onClick={sub} >
              submit
            </button>
          {/* </Link> */}
        </div>
      </form>
      {/* <Outlet /> */}
      <Display input={input} />
    </div>
  );
};

export default Form;
