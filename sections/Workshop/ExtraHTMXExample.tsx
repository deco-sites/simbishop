import { useScript } from "@deco/deco/hooks";

const onClick = () => {
  const input = document.getElementById("randomized") as HTMLInputElement;

  if (input) {
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    input.value = String(randomNumber);
  }
};

export default function ExtraHMTXExample() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md" id="wrapper">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Extra HTMX Example
      </h1>
      <div className="space-y-4">
        <label className="block text-gray-700 font-medium">
          Randomized Value:
          <input
            id="randomized"
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </label>
        <button
          hx-on:click={useScript(onClick)}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
        >
          Randomize
        </button>
      </div>
    </div>
  );
}
