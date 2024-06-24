import React, {FC} from 'react';

interface IProps {
    title: string,
    image: string,
    description: string,
}

const GeneralStructure: FC<IProps> = ({title,image,description}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p>{description}</p>
        </div>
    );
};

export default GeneralStructure;