import React from 'react';

const DescriptionOfNodeJs = () => {
    return (
        <div>
            <h2>Node JS</h2>
            <img src="https://web-developer.in.ua/assets/articles/node/node-why/node-why.png" alt="img node js"/>
            <p>Node или Node.js (читается: ноуд или ноуд-джей-эс) — программная платформа, основанная на движке V8
                (компилирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в
                язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами
                ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на
                разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на
                сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные
                приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) и даже программировать
                микроконтроллеры (например, tessel, low.js и Espruino). В основе Node.js лежит событийно-ориентированное
                и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом.</p>
        </div>
    );
};

export default DescriptionOfNodeJs;