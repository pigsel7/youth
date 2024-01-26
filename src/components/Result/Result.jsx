import "./Result.scss";

export function Result({ onClickRestart }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />

            <h2>Вы Молодцы!</h2>
            <button onClick={onClickRestart}>Попробовать снова</button>
        </div>
    );
}
