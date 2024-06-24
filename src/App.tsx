import React, {FC} from 'react';
import './App.css';
import './components/css/img.module.css';
import './components/css/text.module.css';
import GeneralStructure from "./components/general-structure/GeneralStructure";

const App: FC = () => {
    return (
        <>
            <h1>Fronted</h1>
            <GeneralStructure title={'HTML'}
                              description={'HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык\n' +
                                  '                гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML\n' +
                                  '                документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код\n' +
                                  '                в интерфейс, который будет отображаться на экране монитора.'}
                              image={"https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"}/>
            <GeneralStructure title={'CSS'}
                              image={"https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"}
                              description={'CSS (англ. Cascading Style Sheets «каскадные таблицы стилей») — формальный язык декодирования и описания\n' +
                                  '                внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или\n' +
                                  '                XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.'}/>
            <GeneralStructure title={'JavaScript'}
                              image={"https://assets.ithillel.ua/images/blog/cover/_transform_blogSplashSimple_desktop_2x/1089/javascript.jpg"}
                              description={'JavaScript (англ. /ˈdʒɑːvəskrɪpt/; аббр. JS) — мультипарадигменный язык программирования. Поддерживает\n' +
                                  '                объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации\n' +
                                  '                ECMAScript (стандарт ECMA-262[2]).\n' +
                                  '\n' +
                                  '                JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.\n' +
                                  '                Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности\n' +
                                  '                веб-страницам.\n' +
                                  '\n' +
                                  '                Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление\n' +
                                  '                памятью, прототипное программирование, функции как объекты первого класса.\n' +
                                  '\n' +
                                  '                На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java.\n' +
                                  '                Языком JavaScript не владеет какая-либо организация или компания, что отличает его от ряда языков\n' +
                                  '                программирования, используемых в веб-разработке.'}/>
            <GeneralStructure title={'React'}
                              image={"https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg"}
                              description={'React (иногда React.js или ReactJS) — JavaScript-библиотека[4] с открытым исходным кодом для разработки\n' +
                                  '                пользовательских интерфейсов.\n' +
                                  '\n' +
                                  '                React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и\n' +
                                  '                корпораций[5][6][7].\n' +
                                  '\n' +
                                  '                React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить\n' +
                                  '                высокую скорость разработки, простоту и масштабируемость. В качестве библиотеки для разработки\n' +
                                  '                пользовательских интерфейсов React часто используется с другими библиотеками, такими как MobX, Redux и\n' +
                                  '                GraphQL.'}/>
            <h1>Backend</h1>
            <GeneralStructure title={'Node JS'}
                              image={"https://web-developer.in.ua/assets/articles/node/node-why/node-why.png"}
                              description={'Node или Node.js (читается: ноуд или ноуд-джей-эс) — программная платформа, основанная на движке V8\n' +
                                  '                (компилирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в\n' +
                                  '                язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами\n' +
                                  '                ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на\n' +
                                  '                разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на\n' +
                                  '                сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные\n' +
                                  '                приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) и даже программировать\n' +
                                  '                микроконтроллеры (например, tessel, low.js и Espruino). В основе Node.js лежит событийно-ориентированное\n' +
                                  '                и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом.'}/>
            <GeneralStructure title={'MongoDB'}
                              image={"https://miro.medium.com/v2/resize:fit:1200/1*QJnvahq_EBdUGjYQUYrhvA.png"}
                              description={'MongoDB — документоориентированная система управления базами данных, не требующая описания схемы таблиц. ' +
                                  'Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных. ' +
                                  'Применяется в веб-разработке, в частности, в рамках JavaScript-ориентированного стека MEAN.'}/>
            <footer>Copyright by LisVan</footer>
        </>
    );
}

export default App;
