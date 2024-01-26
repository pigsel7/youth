import React from "react";

import { Spisok } from "./components/Spisok/Spisok";
import { Today, Today2 } from "./components/Today/Today";

import { yoth, advice } from "./data";

import "./index.scss";

// // const questions = [
// //     {
// //         title: "React - это ... ?",
// //         variants: ["библиотека", "фреймворк", "приложение"],
// //         correct: 0,
// //     },
// //     {
// //         title: "Компонент - это ... ",
// //         variants: [
// //             "приложение",
// //             "часть приложения или страницы",
// //             "то, что я не знаю что такое",
// //         ],
// //         correct: 1,
// //     },
// //     {
// //         title: "Что такое JSX?",
// //         variants: [
// //             "Это простой HTML",
// //             "Это функция",
// //             "Это тот же HTML, но с возможностью выполнять JS-код",
// //         ],
// //         correct: 2,
// //     },
// // ];

// // function Game({ question, onClickVariant, step }) {
// //     const persantage = Math.round((100 / questions.length) * step);
// //     console.log(persantage);

// //     return (
// //         <>
// //             <div className="progress">
// //                 <div
// //                     style={{ width: `${persantage}%` }}
// //                     className="progress__inner"
// //                 ></div>
// //             </div>
// //             <h1>{question.title}</h1>
// //             <ul>
// //                 {question.variants.map((text, index) => {
// //                     return (
// //                         <li
// //                             key={text}
// //                             onClick={() => {
// //                                 onClickVariant(index);
// //                             }}
// //                         >
// //                             {text}
// //                         </li>
// //                     );
// //                 })}
// //             </ul>
// //         </>
// //     );
// // }

// // function App() {
// //     const [step, setStep] = useState(
// //         JSON.parse(localStorage.getItem("step") ?? 0)
// //     );
// //     const question = questions[step];
// //     const [correct, setCorrect] = useState(
// //         JSON.parse(localStorage.getItem("correct") ?? 0)
// //     );
// //     const onClickVariant = (index) => {
// //         if (index === questions[step].correct) setCorrect(correct + 1);
// //         setStep(step + 1);
// //     };
// //     const onClickRestart = () => {
// //         setStep(0);
// //         setCorrect(0);
// //     };
// //     useEffect(() => {
// //         localStorage.setItem("step", JSON.stringify(step));
// //     }, [step]);
// //     useEffect(() => {
// //         localStorage.setItem("correct", JSON.stringify(correct));
// //     }, [correct]);

// //     let isAuth = true;
// //     const [login, setLogin] = useState("");
// //     const [password, setPassword] = useState("");

// //     return isAuth ? (
// //         <div className="App">
// //             {step < questions.length ? (
// //                 <Game
// //                     question={question}
// //                     onClickVariant={onClickVariant}
// //                     step={step}
// //                 />
// //             ) : (
// //                 <Result onClickRestart={onClickRestart} correct={correct} />
// //             )}
// //         </div>
// //     ) : (
// //         <div style={{ display: "flex", flexDirection: "column" }}>
// //             <h1>Необходима авторизация</h1>
// //         </div>
// //     );

// // }

function App() {
    const d = new Date();
    // const p = Math.floor(
    //     (d - new Date("10/04/2023 00:01")) / (1000 * 60 * 60 * 24 * 7)
    // );
    const dp = (d - new Date("10/04/2023 00:01")) / (1000 * 60 * 60 * 24);
    const persantage = Math.min(
        Math.round((100 / ((yoth.length / 3) * 7)) * (dp + 1)),
        100
    );
    const persantage2 =
        Math.round((100 / ((advice.length / 3) * 7)) * (dp + 1)) % 100;

    return (
        <div className="container">
            <div className="App">
                <div className="progress">
                    <div
                        style={{ width: `${persantage}%` }}
                        className="progress__inner"
                    ></div>
                </div>
                <Today />
                <Spisok />
            </div>
            <div className="App App2">
                <div className="progress">
                    <div
                        style={{ width: `${persantage2}%` }}
                        className="progress__inner"
                    ></div>
                </div>
                <Today2 />
            </div>
            <div className="footer">
                by{" "}
                <a href="https://t.me/pigsel8" target="_blank">
                    PIGsel8
                </a>
            </div>
        </div>
    );
}

export default App;
