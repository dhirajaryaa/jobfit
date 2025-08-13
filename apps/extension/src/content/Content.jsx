import { useState } from "react";
import { LuScanText, LuSave } from "react-icons/lu";
import { FiLoader } from "react-icons/fi";
import ShowResult from "../components/ShowResult";

function Content() {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const resultSample = {
  matchScore: {
    percentage: 85,
    text: "Great fit! You meet most of the core requirements for this role.",
  },
  skillsMatch: [
    {
      technology: "HTML",
      text: "You’re well-versed in building structured web pages.",
    },
    {
      technology: "CSS",
      text: "Solid grasp of styling and responsive design.",
    },
    {
      technology: "JavaScript",
      text: "Solid grasp of styling and responsive design.",
    },
  ],
  improveSkills: [
    {
      technology: "ReactJS",
      text: "Strengthen your knowledge of hooks, state management, and component",
    },
    {
      technology: "Node.js",
      text: "Improve backend API building and database integration skills.",
    },
  ],
  recommendation:
    "Focus on ReactJS and Node.js to become a full-stack powerhouse. Completing 1–2 backend projects will boost your match score",
};


  return (
    <div className="mb-8 mt-14 block px-5 py-3 text-base border border-gray-500 rounded-xl">
      <h1 className="text-3xl font-semibold ">
        💡 Is This Job a Match for You?
      </h1>
      <p className="text-xl text-gray-500 mt-6">
        Find out how well your skills align with this role. Our smart
        skill-matching tool compares your experience with the job requirements
        and gives you a match score.
      </p>

      <div className="flex items-center my-4 gap-4">
        <button
        onClick={()=>setShowResult(prev=>!prev)}
        className="px-4 py-2 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 transition-colors duration-200 text-white rounded-xl shadow-sm border border-violet-400">
          {loading ? (
            <FiLoader size={18} className="animate-spin" />
          ) : (
            <LuScanText size={18} />
          )}
          <span className="text-xl">Check Skills Match</span>
        </button>

        <button className="px-4 py-2 flex items-center justify-center gap-2 rounded-xl bg-transparent shadow-sm border text-violet-600 font-semibold hover:bg-violet-100 transition-colors duration-200 ">
          <LuSave size={18} />
          <span className="text-xl">Save for Later</span>
        </button>
      </div>
      {showResult && <ShowResult result={resultSample} />}
    </div>
  );
}

export default Content;
