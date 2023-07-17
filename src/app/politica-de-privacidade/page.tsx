export const metadata = {
  title:
    'Política de privacidade - Bekk, Newsletter de Inteligência Artificia!',
};

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col items-center justify-between p-6 md:p-24">
      <h1 className="text-xl font-bold">Política de privacidade</h1>

      <div className="mt-4">
        <p>
          Na nossa Newsletter de Inteligência Artificial, respeitamos a sua
          privacidade e estamos empenhados em proteger as informações pessoais
          que você nos fornece. Esta Política de Privacidade descreve como
          coletamos, usamos, compartilhamos e protegemos suas informações quando
          você usa nossa newsletter. Ao usar nossa newsletter, você concorda com
          os termos descritos nesta política.
        </p>

        <h2 className="mb-2 mt-4 text-lg font-bold">
          1. Informações coletadas
        </h2>
        <p>
          Para fornecer nossa newsletter, podemos coletar as seguintes
          informações:
        </p>
        <ul className="ml-4 list-disc">
          <li>
            Endereço de e-mail: coletamos seu endereço de e-mail quando você se
            inscreve em nossa newsletter.
          </li>
        </ul>

        <h2 className="mb-2 mt-4 text-lg font-bold">2. Uso das informações</h2>
        <p>Utilizamos as informações coletadas para os seguintes propósitos:</p>
        <ul>
          <li>
            Enviar atualizações e conteúdos relacionados à inteligência
            artificial para o endereço de e-mail fornecido.
          </li>
          <li>
            Aprimorar e personalizar a experiência do usuário na nossa
            newsletter.
          </li>
          <li>Realizar análises e pesquisas para melhorar nossos serviços.</li>
        </ul>

        <h2 className="mb-2 mt-4 text-lg font-bold">
          3. Compartilhamento das informações
        </h2>
        <p>
          Não compartilhamos suas informações pessoais com terceiros, exceto nas
          seguintes circunstâncias:
        </p>
        <ul>
          <li>
            Quando temos seu consentimento explícito para compartilhar as
            informações.
          </li>
          <li>Quando exigido por lei, regulamentação ou processo legal.</li>
          <li>
            Com fornecedores de serviços de confiança que nos ajudam a operar
            nosso negócio e fornecer a newsletter.
          </li>
        </ul>

        <h2 className="mb-2 mt-4 text-lg font-bold">
          4. Segurança das informações
        </h2>
        <p>
          Implementamos medidas de segurança adequadas para proteger suas
          informações pessoais contra acesso não autorizado, alteração,
          divulgação ou destruição. No entanto, observe que nenhuma transmissão
          de dados pela Internet ou método de armazenamento eletrônico é 100%
          seguro. Portanto, não podemos garantir a segurança absoluta das
          informações.
        </p>

        <h2 className="mb-2 mt-4 text-lg font-bold">5. Links externos</h2>
        <p>
          Nossa newsletter pode conter links para sites de terceiros. Não nos
          responsabilizamos pelas práticas de privacidade desses sites.
          Recomendamos que você leia as políticas de privacidade deles antes de
          fornecer qualquer informação pessoal.
        </p>

        <h2 className="mb-2 mt-4 text-lg font-bold">
          6. Alterações nesta Política de Privacidade
        </h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente.
          Quaisquer alterações serão publicadas nesta página. É sua
          responsabilidade revisar esta política periodicamente para se manter
          informado sobre como protegemos suas informações pessoais.
        </p>

        <h2 className="mb-2 mt-4 text-lg font-bold">7. Contato</h2>
        <p>
          Se você tiver dúvidas, preocupações ou comentários sobre esta Política
          de Privacidade ou nossas práticas de privacidade, entre em contato
          conosco por meio das informações fornecidas em nossa plataforma.
        </p>
      </div>
    </main>
  );
}
