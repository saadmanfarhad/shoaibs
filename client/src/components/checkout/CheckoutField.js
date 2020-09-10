import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6 black-70">{label}</label>
      <input
        {...input}
        className="pa2 input-reset ba bw1 bg-transparent hover-bg-black hover-white w-100"
      />
      <div className="red" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
