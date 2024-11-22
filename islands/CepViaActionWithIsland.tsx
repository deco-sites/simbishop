import { MyCEPResponse } from "../actions/workshop/searchCep.ts";
import { JSX } from "preact";
import { useSignal } from "@preact/signals";
import { invoke } from "../runtime.ts";

export default function CepViaActionNoIsland() {
  const response = useSignal<MyCEPResponse | undefined>(undefined);
  const cep = useSignal<string>("");

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();

    const fetchedResponse = await invoke.site.actions.workshop.searchCep({
      cep: cep.value,
    });
    response.value = fetchedResponse;
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Powered by Action - With Island
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-gray-700 font-medium">
          CEP:
          <input
            placeholder="Digite seu CEP..."
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={cep.value}
            onChange={(e) => (cep.value = e.currentTarget.value)}
          />
        </label>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200">
          Enviar
        </button>
      </form>
      {response.value && (
        <div className="mt-4 bg-white p-4 rounded-md shadow-sm">
          <ul className="text-gray-600">
            <li>
              <span className="font-medium text-gray-800">Bairro:</span>{" "}
              {response.value.bairro}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
