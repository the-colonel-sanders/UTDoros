let startingValue = 1500;


function Website() {
    const [timeLeft, setTimeLeft] = React.useState(1500);
    const [isRunning, setIsRunning] = React.useState(false);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedSeconds = String(seconds).padStart(2, "0");


    React.useEffect(() => {
        console.log("Timer effect started");

        if (isRunning) {
            const interval = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
            }, 1000)

            return () => {
                clearInterval(interval);
            };
        }


    }, [isRunning]);

    return (
        <div>
            <h1 className="heading">UT Native Pomodoro</h1>
            <p className="timer">{minutes}:{formattedSeconds}</p>
            <div className="subtractButton">
                <button className="minus" onClick={() => setIsRunning(true)}>
                    subtract 1
                </button>
                <button className="stop" onClick={() => setIsRunning(false)}>
                    stop
                </button>
            </div>

        </div>

    );


}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Website />);