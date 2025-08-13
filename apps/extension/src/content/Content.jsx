import { LuScanText } from "react-icons/lu";

function Content() {
  return (
    <div className="my-8 block px-3 py-2 text-base border border-gray-500 rounded-xl">
      <h1 className="text-xl font-semibold ">
        💡 Check your skills fit for this job ?
      </h1>
      <p className="text-sm text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab
        sapiente sit obcaecati perspiciatis culpa nemo iure adipisci soluta
        numquam consectetur laborum quae mollitia nulla, voluptatum cum esse
        saepe amet!
      </p>
      <button className="px-4 py-2 flex items-center mt-4 mx-auto justify-center gap-2 bg-violet-600 text-white rounded-xl shadow-sm border border-violet-400">
        <LuScanText size={18} />
        <span className="text-sm">Check Skills Match</span>
      </button>
    </div>
  );
}

export default Content;
