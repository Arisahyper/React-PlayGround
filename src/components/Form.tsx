import React, { useState } from 'react';

const Form = () => {
  // const [values, setValues] = useState({
  //   user_name: '',
  //   email: '',
  // });
  // function handleInputChange(e: any) {
  //   const target = e.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   setValues({ ...values, [name]: value });
  // }
  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();

  return (
    <div style={{ paddingBottom: '50px' }}>
      <form>
        <input
          type="text"
          name="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            return (
              <>
                <h1>{name}</h1>
                <h1>{id}</h1>
              </>
            );
          }}
        >
          送信
        </button>
      </form>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
};

export default Form;
