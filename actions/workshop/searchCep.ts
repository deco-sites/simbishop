import { type AppContext } from "../../apps/site.ts";

interface Props {
  cep: string;
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

async function action(
  props: Props,
  _req: Request,
  _ctx: AppContext,
): Promise<MyCEPResponse> {
  const response = (await fetch(
    `https://viacep.com.br/ws/${props.cep}/json/`,
  ).then((r) => r.json())) as MyCEPResponse;
  return response;
}

export default action;
