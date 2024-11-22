import { SectionProps } from "@deco/deco";

export interface Props {
  cep: string;
}

interface MyResponse {
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
export async function loader({ cep }: Props, _req: Request) {
  const response = (await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
    (r) => r.json(),
  )) as MyResponse;
  return { response, cep };
}

export default function CepViaLoader({
  cep,
  response,
}: SectionProps<typeof loader>) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Powered by Loader
      </h1>
      <div className="bg-white p-4 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700">CEP: {cep}</h2>
        <ul className="mt-2 text-gray-600">
          <li>
            <span className="font-medium text-gray-800">Bairro:</span>{" "}
            {response.bairro}
          </li>
        </ul>
      </div>
    </div>
  );
}
