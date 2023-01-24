import "./App.css";
import { Piano } from "@tonejs/piano";
import { Midi } from "tone";
import { useEffect, useState } from "react";

const CircleSVG: React.FC<{ highlights: string[] }> = ({ highlights }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="500px"
      height="500px"
    >
      <defs>
        <clipPath id="clip1">
          <circle cx="250" cy="250" r="240" />
        </clipPath>
      </defs>
      <g>
        <circle fill="#FFFFFF" cx="250" cy="250" r="240" />
        <path
          fill={highlights.includes("a") ? "yellow" : "#E0E2ED"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(0,250,250)"
        />
        <path
          fill={highlights.includes("b") ? "yellow" : "#E0E2ED"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(60,250,250)"
        />
        <path
          fill={highlights.includes("c#") ? "yellow" : "#E0E2ED"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(120,250,250)"
        />
        <path
          fill={highlights.includes("d#") ? "yellow" : "#E0E2ED"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(180,250,250)"
        />
        <path
          fill={highlights.includes("f") ? "yellow" : "#E0E2ED"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(240,250,250)"
        />
        <path
          fill={highlights.includes("g") ? "yellow" : "#E0E2ED"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(300,250,250)"
        />

        <path
          fill={highlights.includes("e") ? "yellow" : "transparent"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(30,250,250)"
        />

        <path
          fill={highlights.includes("f#") ? "yellow" : "transparent"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(90,250,250)"
        />

        <path
          fill={highlights.includes("g#") ? "yellow" : "transparent"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(150,250,250)"
        />

        <path
          fill={highlights.includes("a#") ? "yellow" : "transparent"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(210,250,250)"
        />

        <path
          fill={highlights.includes("c") ? "yellow" : "transparent"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(270,250,250)"
        />

        <path
          fill={highlights.includes("d") ? "yellow" : "transparent"}
          stroke="#C6BCC0"
          strokeWidth="1"
          d="M 250 250 L490 250 L 490 388.564 z"
          clipPath="url(#clip1)"
          transform="rotate(330,250,250)"
        />

        <text
          x="433"
          y="299"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          A
        </text>
        <text
          x="365"
          y="281"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          f&#9839;
        </text>
        <text
          x="384"
          y="384"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          E
        </text>
        <text
          x="334"
          y="334"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          c&#9839;
        </text>
        <text
          x="299"
          y="433"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          B
        </text>
        <text
          x="281"
          y="365"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          g&#9839;
        </text>
        <text
          x="200"
          y="433"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          F&#9839;/G&#9837;
        </text>
        <text
          x="218"
          y="365"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          e&#9837;/d&#9839;
        </text>
        <text
          x="115"
          y="384"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          D&#9837;
        </text>
        <text
          x="165"
          y="334"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          b&#9837;
        </text>
        <text
          x="66"
          y="299"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          A&#9837;
        </text>
        <text
          x="134"
          y="281"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          f
        </text>
        <text
          x="66"
          y="200"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          E&#9837;
        </text>
        <text
          x="134"
          y="218"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          c
        </text>
        <text
          x="115"
          y="115"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          B&#9837;
        </text>
        <text
          x="165"
          y="165"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          g
        </text>
        <text
          x="200"
          y="66"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          F
        </text>
        <text
          x="218"
          y="134"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          d
        </text>
        <text
          x="299"
          y="66"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          C
        </text>
        <text
          x="281"
          y="134"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          a
        </text>
        <text
          x="384"
          y="115"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          G
        </text>
        <text
          x="334"
          y="165"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          e
        </text>
        <text
          x="433"
          y="200"
          font-family="Arial"
          font-size="32"
          fill="#000000"
          textAnchor="middle"
        >
          D
        </text>
        <text
          x="365"
          y="218"
          font-family="Arial"
          font-size="24"
          fill="#000000"
          textAnchor="middle"
        >
          b
        </text>
        <circle
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          cx="250"
          cy="250"
          r="240"
        />
      </g>
    </svg>
  );
};

const SineWaves: React.FC<{ frequencies: number[]; animate?: boolean }> = ({
  frequencies,
  animate = false,
}) => {
  const [time, setTime] = useState(performance.now() / 200);

  const range = [0, 30];
  const dx = 0.1;
  const scaleBy = 220;
  const points = [];
  let x = range[0];
  while (x < range[1]) {
    let y = 0;
    for (const f of frequencies) {
      y += Math.sin((f / scaleBy) * (x + time));
    }
    points.push([x, y]);
    x += dx;
  }

  useEffect(() => {
    if (animate) {
      const id = setInterval(() => setTime(performance.now() / 200), 30);
      return () => clearInterval(id);
    }
  }, [animate]);
  return (
    <svg height="80px">
      <polyline
        points={points.map(([x, y]) => `${x * 10},${y * 10 + 40}`).join(" ")}
        stroke="black"
        fill="none"
      />
    </svg>
  );
};

const PianoSVG: React.FC<{ highlights: string[] }> = ({ highlights }) => {
  return (
    <svg viewBox="0 0 161 120" width="300px">
      <rect
        style={{
          fill: highlights.includes("c") ? "yellow" : "white",
          stroke: "black",
        }}
        x="0"
        y="0"
        width="23"
        height="120"
      />
      <rect
        style={{
          fill: highlights.includes("d") ? "yellow" : "white",
          stroke: "black",
        }}
        x="23"
        y="0"
        width="23"
        height="120"
      />
      <rect
        style={{
          fill: highlights.includes("e") ? "yellow" : "white",
          stroke: "black",
        }}
        x="46"
        y="0"
        width="23"
        height="120"
      />
      <rect
        style={{
          fill: highlights.includes("f") ? "yellow" : "white",
          stroke: "black",
        }}
        x="69"
        y="0"
        width="23"
        height="120"
      />
      <rect
        style={{
          fill: highlights.includes("g") ? "yellow" : "white",
          stroke: "black",
        }}
        x="92"
        y="0"
        width="23"
        height="120"
      />
      <rect
        style={{
          fill: highlights.includes("a") ? "yellow" : "white",
          stroke: "black",
        }}
        x="115"
        y="0"
        width="23"
        height="120"
      />
      <rect
        style={{
          fill: highlights.includes("b") ? "yellow" : "white",
          stroke: "black",
        }}
        x="138"
        y="0"
        width="23"
        height="120"
      />
      <rect
        style={{
          fill: highlights.includes("c#") ? "yellow" : "black",
          stroke: "black",
        }}
        x="14.33333"
        y="0"
        width="13"
        height="80"
      />
      <rect
        style={{
          fill: highlights.includes("d#") ? "yellow" : "black",
          stroke: "black",
        }}
        x="41.66666"
        y="0"
        width="13"
        height="80"
      />
      <rect
        style={{
          fill: highlights.includes("f#") ? "yellow" : "black",
          stroke: "black",
        }}
        x="82.25"
        y="0"
        width="13"
        height="80"
      />
      <rect
        style={{
          fill: highlights.includes("g#") ? "yellow" : "black",
          stroke: "black",
        }}
        x="108.25"
        y="0"
        width="13"
        height="80"
      />
      <rect
        style={{
          fill: highlights.includes("a#") ? "yellow" : "black",
          stroke: "black",
        }}
        x="134.75"
        y="0"
        width="13"
        height="80"
      />
    </svg>
  );
};

const start = async (setNotes: (call: (old: number[]) => number[]) => void) => {
  const midiAccess = await navigator.requestMIDIAccess();
  const piano = new Piano();
  piano.toDestination();
  await piano.load();
  midiAccess.inputs.forEach((entry) => {
    entry.addEventListener("midimessage", (event) => {
      if (event.data[0] === 144) {
        if (event.data[2] === 0) {
          setNotes((old) => old.filter((x) => x !== event.data[1]));
          piano.keyUp({ midi: event.data[1] });
        } else {
          setNotes((old) => {
            if (old.includes(event.data[1])) {
              return old;
            }
            return [...old, event.data[1]];
          });
          piano.keyDown({ midi: event.data[1], velocity: 0.3 });
        }
      }
    });
  });
};

const NoteDetails: React.FC<{ notes: number[] }> = ({ notes }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Note Name</td>
          <td>Frequency</td>
          <td>Tonic Ratio</td>
          <td>Frequency Graph</td>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => {
          const midiNote = Midi(note);
          return (
            <tr key={note}>
              <td>{midiNote.toNote()}</td>
              <td>{Math.round(midiNote.toFrequency())}</td>
              <td>
                {Math.round(
                  (Math.round(midiNote.toFrequency()) /
                    Math.round(Midi(notes[0]).toFrequency())) *
                    100
                ) / 100}
              </td>
              <td>
                <SineWaves frequencies={[midiNote.toFrequency()]} animate />
              </td>
            </tr>
          );
        })}
        {notes.length > 0 ? (
          <tr>
            <td>Combined</td>
            <td />
            <td />
            <td>
              <SineWaves
                frequencies={notes.map((x) => Midi(x).toFrequency())}
                animate
              />
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
};

const simpleNote = (midi: number) =>
  Midi(midi).toNote().replace(/[0-9]/g, "").toLowerCase();

const keyToNum = (key: string) => {
  switch (key) {
    case "KeyA":
      return 60;

    case "KeyS":
      return 62;

    case "KeyD":
      return 64;
    case "KeyG":
      return 67;
    case "KeyT":
      return 66;
    case "KeyK":
      return 72;
    default:
      return -1;
  }
};

function App() {
  const [notes, setNotes] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      start(setNotes);
    }
  }, [started]);

  // Keyboard based events
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const num = keyToNum(event.code);
      if (num !== -1) {
        setNotes((old) => {
          if (old.includes(num)) {
            return old;
          }
          return [...old, num];
        });
      }
    });

    window.addEventListener("keyup", (event) => {
      const num = keyToNum(event.code);
      if (num !== -1) {
        setNotes((old) => old.filter((x) => x !== num));
      }
    });
  }, []);

  return (
    <div>
      {started ? (
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <div>
              <NoteDetails notes={notes} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PianoSVG highlights={notes.map(simpleNote)} />
            <CircleSVG highlights={notes.map(simpleNote)} />
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={() => setStarted(true)}>
            Click me to get started
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
