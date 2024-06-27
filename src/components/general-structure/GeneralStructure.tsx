import React, {FC, ReactNode} from 'react';

interface IProps {
    title: string,
    image: string
}

type IState<T> = T & {children?: ReactNode};

const GeneralStructure: FC<IState<IProps>> = ({title,image, children}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p>{children}</p>
        </div>
    );
};

export default GeneralStructure;