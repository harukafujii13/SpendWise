import React from 'react';

const signUp = () => {
  return (
    <div className="">
      <div>
        <div>Register</div>
        <form>
          <div>
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <button type="submit">Register</button>
          <p>Already have a account?</p>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default signUp;

//rfce
