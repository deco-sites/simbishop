import { type AppContext } from "../../apps/site.ts";
import { useSection } from "@deco/deco/hooks";

interface Props {
  cep?: string;
  bairro?: string;
}

export interface MyCEPResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export async function action(
  _props: Props,
  req: Request,
  _ctx: AppContext,
): Promise<Props> {
  const formData = await req.formData();

  const cep = `${formData.get("cep") || ""}`;
  const response = (await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
    (r) => r.json(),
  )) as MyCEPResponse;
  return { cep: cep, bairro: response.bairro };
}

export default function CepViaActionNoIsland(props: Props) {
  const { bairro, cep } = props;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md" id="wrapper">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Powered by HTMX</h1>
      <form
        hx-post={useSection({ props: props })}
        hx-trigger="submit"
        hx-target="closest section"
        hx-swap="outerHTML"
        className="space-y-4"
      >
        <label className="block text-gray-700 font-medium">
          CEP:
          <input
            value={cep}
            name="cep"
            placeholder="Digite seu CEP..."
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </label>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200">
          Enviar
        </button>
      </form>
      {bairro && (
        <div className="mt-4 bg-white p-4 rounded-md shadow-sm">
          <ul className="text-gray-600">
            <li>
              <span className="font-medium text-gray-800">Bairro:</span>{" "}
              {bairro}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
