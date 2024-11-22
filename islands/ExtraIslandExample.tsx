import { useSignal } from "@preact/signals";

export default function ExtraHMTXExample() {
  const randomNumber = useSignal(0);

  const onClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 100000) + 1;

    randomNumber.value = newRandomNumber;
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md" id="wrapper">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Extra Island Example
      </h1>
      <div className="space-y-4">
        <label className="block text-gray-700 font-medium">
          Randomized Value:
          <input
            id="randomized"
            value={randomNumber.value}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </label>
        <button
          onClick={onClick}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
        >
          Randomize
        </button>
      </div>
    </div>
  );
}
