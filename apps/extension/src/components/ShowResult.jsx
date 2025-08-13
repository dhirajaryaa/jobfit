import { FaChartPie, FaCircleArrowRight, FaCircleCheck } from "react-icons/fa6";

function ShowResult({ result }) {
  return (
    <div
      id="result"
      className="text-xl text-gray-800 font-base flex flex-col justify-center"
    >
      <h3 className="text-2xl font-semibold mt-6">📊 Your Job Fit Results : </h3>
      {/* match score  */}
      <div className="mt-4">
        <h4 className="font-semibold text-xl my-3">Match Score:</h4>
        <div className="flex items-center gap-4">
          <FaChartPie size={19} />
          <p className="text-gray-700 text-lg">
            <span className="text-violet-600 font-semibold">
              {result?.matchScore?.percentage}% Match
            </span>{" "}
            – {result?.matchScore?.text}
          </p>
        </div>
      </div>

      {/* match skills  */}
      <div className="mt-4">
        <h4 className="font-semibold text-xl my-3">Matched Skills:</h4>
        {result?.skillsMatch?.map((data, index) => (
          <div className="flex items-center gap-4" key={index}>
            <FaCircleCheck size={17} />
            <p className="text-gray-700 text-lg">
              <span className="text-violet-600 font-semibold">
                {data.technology}
              </span>{" "}
              – {data.text}
            </p>
          </div>
        ))}
      </div>

      {/* improve skills  */}
      <div className="mt-4">
        <h4 className="font-semibold text-xl my-3">Improve These Skills:</h4>
        {result?.improveSkills?.map((data, index) => (
          <div className="flex items-center gap-4" key={index}>
            <FaCircleArrowRight size={17} />
            <p className="text-gray-700 text-lg">
              <span className="text-violet-600 font-semibold">
                {data.technology}
              </span>{" "}
              – {data.text}
            </p>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div className="mt-4">
        <h4 className="font-semibold text-xl my-3">Recommendation:</h4>
        <p className="text-blue-500 text-lg font-medium">
          💡 {result.recommendation}
        </p>
      </div>
    </div>
  );
}

export default ShowResult;
