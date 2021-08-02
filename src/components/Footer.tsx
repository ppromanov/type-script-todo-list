import React from 'react';

type Button = {
  deleteCompleted: (status: boolean) => void;
};

const Footer: React.FC<Button> = ({ deleteCompleted }) => {
  return (
    <button onClick={() => deleteCompleted(true)}>Delete completed</button>
  );
};

export default Footer;
