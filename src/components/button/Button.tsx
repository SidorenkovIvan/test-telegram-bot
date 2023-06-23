import React from 'react';
import { useRouter } from 'next/router';

interface IButton {
    text: string;
    color?: string;
    size?: string;
    link: string;
}

const Button: React.FC<IButton> = ({ text, size, color, link }) => {
    const { push } = useRouter();

    return (
        <button onClick={() => push(link)}>
            <p>{text}</p>
        </button>
    );
};

export default Button;
