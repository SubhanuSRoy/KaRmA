import React, { useState } from "react";

function GenerateReport() {
  const [searchQuery, setSearchQuery] = useState("");
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);

  const listen = () => {
    setListening(true);
    // setLoading(true);
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.start();
    recognition.onresult = (e) => {
      const query = e.results[0][0].transcript;
      setSearchQuery(query);
      setListening(false);
      // setLoading(false);
      recognition.stop();
    };
    recognition.onerror = (e) => {
      console.log(e);
      setListening(false);
      // setLoading(false);
    };
  };

  const updateQuery = () => {
    setListening(false);
    // setLoading(true);
  };

  const getRes = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  const reportFormat = {
    head: {
      title: "Balance Growth Comparison of Metro Branches in Circle 1",
      subtitle: "As of July 2022",
    },
    body: [
      {
        type: "text",
        text: "The following table shows the balance growth of metro branches in circle 1 as of July 2022.",
      },
      {
        type: "table",
        columns: ["Branch", "Balance Growth (in Rs.)"],
        rows: [
          ["Branch 1", 100000],
          ["Branch 2", 200000],
          ["Branch 3", 300000],
        ],
      },
      {
        type: "chart",
        data: {
          labels: ["Branch 1", "Branch 2", "Branch 3"],
          datasets: [
            {
              label: "Balance Growth (in Rs.)",
              data: [100000, 200000, 300000],
            },
          ],
        },
        type: "bar",
        data: {
          labels: ["Branch 1", "Branch 2", "Branch 3"],
          datasets: [
            {
              label: "Balance Growth (in Rs.)",
              data: [100000, 200000, 300000],
            },
          ],
        },
      },
    ],
  };
  return (
    <div className="flex flex-col items-center">
      {/* input */}

      <form class="w-full flex items-center gap-4" onSubmit={getRes}>
        <div class="relative flex items-center flex-grow">
          <input
            class="h-20 w-full rounded-lg border-2 border-prim pl-8 pr-10 bg-gray-50 text-gray-800 text-lg outline-none placeholder-gray-300 focus:z-10"
            // placeholder="Ask me anything..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
          />

          {!listening && (
            <button
              type="submit"
              onClick={listen}
              class="absolute  right-2 rounded-full p-2  text-gray-800 hover:bg-prim hover:text-white"
            >
              <span class="sr-only">Start Listening</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          )}
          {listening && (
            <button
              onClick={updateQuery}
              class="absolute right-2 rounded-full p-2  text-red-500 bg-gray-50 hover:bg-red-500 hover:text-white"
            >
              <span class="sr-only">Stop Listening</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          )}
        </div>
        {loading ? (
          <img
            className="h-12"
            src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          />
        ) : (
          <></>
        )}
        <button
          className="bg-prim p-4 h-16 rounded-md text-center text-white"
          onClick={getRes}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>

      <div className="w-full p-4">
        <h1 className="text-2xl font-bold my-4">{reportFormat.head.title}</h1>
        <p className="text-lg font-medium">{reportFormat.head.subtitle}</p>
      </div>
    </div>
  );
}

export default GenerateReport;
