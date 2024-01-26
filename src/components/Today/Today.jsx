import { yoth, queue, dates, advice, queue2 } from "../../data";

import { Result } from "../Result/Result";

export function Today() {
    const date = new Date();
    const period = Math.floor(
        (date - new Date("10/04/2023 00:01")) / (1000 * 60 * 60 * 24 * 7)
    );
    const end = Math.min(yoth.length - 1, period * 3 + 2);
    for (let i = 0; i <= end && i < yoth.length; i++) {
        yoth[queue[i]].checked = true;
        yoth[queue[i]].date = dates[Math.floor(i / 3)];
    }

    return period * 3 < yoth.length ? (
        <div className="today">
            <div>Дата: {date.toLocaleDateString()}</div>
            <div>
                {/* <div className="jc-sp"> */}
                <div>Период: {period + 1}-я неделя</div>
                <div>
                    {dates[Math.min(period, dates.length - 1)]}-
                    {dates[Math.min(period + 1, dates.length - 1)]}
                </div>
                {/* </div> */}
            </div>
            <div>
                <ul>
                    <div className="current">
                        <li>{yoth[queue[(period * 3) % queue.length]].name}</li>
                        <li>
                            {yoth[queue[(period * 3 + 1) % queue.length]].name}
                        </li>
                        <li>
                            {yoth[queue[(period * 3 + 2) % queue.length]].name}
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    ) : (
        <Result
            onClickRestart={() => {
                alert("Попросите Андрея сделать эту кнопку кликабельной");
            }}
        />
    );
}

export function Today2() {
    const date = new Date();
    const period = Math.floor(
        (date - new Date("10/04/2023 00:01")) / (1000 * 60 * 60 * 24 * 7)
    );
    // const end = Math.min(yoth.length, period * 3 + 2);

    return (
        <div className="today">
            <div>
                Круг: {Math.floor((3 * (period + 1) - 3) / advice.length) + 1}
            </div>
            <div>
                <ul>
                    <div className="current">
                        <li>
                            {advice[queue2[(period * 3) % queue2.length]].name}
                        </li>
                        <li>
                            {
                                advice[queue2[(period * 3 + 1) % queue2.length]]
                                    .name
                            }
                        </li>
                        <li>
                            {
                                advice[queue2[(period * 3 + 2) % queue2.length]]
                                    .name
                            }
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}
