import React, {FC} from 'react';
import DescriptionOfHTML from "../studying-fullstack/studying-fronted/description-html/DescriptionOfHTML";
import DescriptionOfCss from "../studying-fullstack/studying-fronted/description-css/DescriptionOfCss";
import DescriptionOfJS from "../studying-fullstack/studying-fronted/description-javascript/DescriptionOfJS";
import DescriptionOfReact from "../studying-fullstack/studying-beckend/description-react/DescriptionOfReact";
import DescriptionOfNodeJS from "../studying-fullstack/studying-beckend/description-node-js/DescriptionOfNodeJS";


const GeneralStructure: FC = () => {
    return (
        <div>
            <h1>Fronted</h1>
            <DescriptionOfHTML/>
            <DescriptionOfCss/>
            <DescriptionOfJS/>
            <h1>Backend</h1>
            <DescriptionOfReact/>
            <DescriptionOfNodeJS/>
        </div>
    );
};

export default GeneralStructure;