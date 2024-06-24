import React, {FC} from 'react';

const DescriptionOfHTML: FC = () => {

    return (
        <div>
            <h2>HTML</h2>
            <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
                 alt="img html"/>
            <p>HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык
                гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML
                документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код
                в интерфейс, который будет отображаться на экране монитора.</p>
        </div>
    );
};

export default DescriptionOfHTML;