import { useState } from "react";
export default function Input() {
  /* 
        WhatEver Value we pass in useState function it's assign it to 
        firstName state
    */
  /* 
    In class based components state is set is only object but here using
    hooks we can assign any value to the stateName number, string, array,
    and can be also an object 
*/
  /*
    Create Seprate first and last name variabl and their setState function
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  */
  const [name, updateName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            className="input"
            value={name.firstName}
            onChange={(e) =>
              updateName({ firstName: e.target.value, lastName: name.lastName })
            }
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={name.lastName}
            onChange={(e) =>
              /* 
                If we not provide firstName then updateName function takes 
                firstName as undefined and any value firstName hav, undefined 
                is over riden that value if we no pass any firstName then 
                firstName taken as undefined
            */
              updateName({
                firstName: name.firstName,
                lastName: e.target.value,
              })
            }
          />
        </Row>
      </div>

      <h2>Hello, {name.firstName + " " + name.lastName}</h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>{label}</lable>
      <br />
      {props.children}
      <hr />
    </>
  );
}
