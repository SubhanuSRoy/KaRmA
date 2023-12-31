import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// icons
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
function KRAConverse() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [searchQuery, setSearchQuery] = useState(null);
  const [AIResponse, setAIResponse] = useState("");
  const [loading, setloading] = useState(false);

  const [messages, setMessages] = useState([]);

  const empID = useSelector((state) => state.user.empID);

  const listen = () => {
    resetTranscript();
    SpeechRecognition.startListening();
    setSearchQuery(transcript);
  };
  const updateQuery = () => {
    SpeechRecognition.stopListening();
    console.log(transcript);
    setSearchQuery(transcript);
  };

  const getRes = async (e) => {
    e.preventDefault();
    setloading(true);
    console.log(searchQuery);
    const prompt = `I am employee with the Emp_ID=${empID} and help me with the following query: ${searchQuery}`
    axios
      // .post(process.env.REACT_APP_CHAT_URL + "chat/", {
      .post("http://172.20.10.3:8000/query_tables/", {
        query: prompt,
      })
      .then((res) => {
        console.log(res);
        setAIResponse(res.data.result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const showMessages = async () => {
    setloading(false);
    setMessages((oldArr) => [
      ...oldArr,
      {
        query: searchQuery,
        ans: AIResponse,
      },
    ]);
  };
  useLayoutEffect(() => {
    console.log("inside useEffect");
    if (AIResponse?.length > 0) {
      showMessages();
    }
  }, [AIResponse]);

  const data = {
    jobs: [
      {
        role: "SDE",
        company: "Microsoft",
        salary: "15LPA",
        logo: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
      {
        role: "SDE",
        company: "Microsoft",
        salary: "15LPA",
        logo: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
    ],
    courses: [
      {
        title: "Java Crash Course",
        course_creator: "Tim Buchalka",
        totalTime: "15hrs",
        logo: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
      {
        title: "Java Crash Course",
        course_creator: "Tim Buchalka",
        totalTime: "15hrs",
        logo: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
    ],
    mentors: [
      {
        mentor_name: "Jonathan Watson",
        quali: "Btech",
        tags: ["software", "backend"],
        img: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
      {
        mentor_name: "Jonathan Watson",
        quali: ["Btech", "MTech"],
        tags: ["software", "backend"],
        img: "https://drive.google.com/file/d/1fkR0HV1uPCTEKos7I4QpJG7zwVVK5S0l/view?usp=sharing",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center ">
      {/* chat */}
      <div class="flex flex-col bg-transparent  rounded-lg overflow-auto">
        {/* <img src={`data:image/png;base64,${AIResponse}`}/> */}
        {messages?.map((m) => {
          return (
            <div class="flex flex-col flex-grow h-fit  p-4 ">
              <div class="flex w-full mt-2 space-x-3 max-w-full">
                <div class="flex-shrink-0 rounded-full bg-gray-50 flex items-center justify-center">
                  <BiUserCircle className="h-10 w-10" />
                </div>
                <div>
                  <div class="bg-gray-50 p-3  rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">{m.query}</p>
                  </div>
                </div>
              </div>
              <div class="flex w-full mt-2 space-x-3 ml-auto justify-end">
                <div>
                  <div class="bg-gray-50 text-gray-800 p-3 rounded-md">
                    <pre class="text-sm whitespace-pre-wrap">{m.ans}</pre>
                  </div>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-50">
                  <img src="https://w7.pngwing.com/pngs/509/329/png-transparent-axis-bank-connaught-place-new-delhi-security-business-bank-purple-angle-violet-thumbnail.png" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* placeholder examples */}
      {messages.length < 1 && (
        <div className="flex gap-8 w-3/4 h-3/4">
          <div className="flex flex-col gap-4 text-gray-400 items-center w-1/3 h-full">
            <h2 className="text-xl flex items-center gap-2">As an Employee</h2>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              How I am doing compared to my colleagues in the cluster ?
            </div>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              Can you give me the top 5 employees in my branch?
            </div>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              Which branches from my cluster is doing bad in RFR KRA?
            </div>
          </div>
          <div className="flex flex-col gap-4 text-gray-400 items-center w-1/3">
            <h2 className="text-xl flex items-center gap-2">Branch Head</h2>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              Can you give me the top 5 employees in my branch?
            </div>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              Advanced Ml algorithm to match you with experienced professionals
            </div>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              Efficient upskilling with relevant multi language course content
            </div>
          </div>
          <div className="flex flex-col gap-4 text-gray-400 items-center w-1/3">
            <h2 className="text-xl flex items-center gap-2">Cluster Head</h2>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              Which branches from my cluster is doing bad in RFR KRA?
            </div>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              Cannot chat with mentors (Yet!)
            </div>
            <div className="bg-midnight p-4 rounded-md w-full flex-wrap text-center">
              May occassionaly give biased results
            </div>
          </div>
        </div>
      )}

      {/* input */}
      <div className="fixed bottom-8 w-3/4">
        <form class="w-full flex items-center gap-4" onSubmit={getRes}>
          <div class="relative flex items-center flex-grow">
            <input
              class="h-20 w-full rounded-lg border-2 border-prim pl-8 pr-10 bg-gray-50 text-gray-800 text-lg outline-none placeholder-gray-300 focus:z-10"
              placeholder="Ask me anything..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              type="text"
            />

            {!listening && (
              <button
              
                onClick={listen}
                class="absolute  right-2 rounded-full p-2  text-gray-50 hover:bg-primary"
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
                type="submit"
                onClick={updateQuery}
                class="absolute right-2 rounded-full p-2  text-red-500 bg-primary"
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
            type="submit"
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
      </div>
    </div>
  );
}

export default KRAConverse;
