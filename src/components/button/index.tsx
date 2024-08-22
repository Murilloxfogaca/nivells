import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
);

export default Button;
