import { Link } from '../Link';
import { SubscribeForm } from '../SubscribeForm';

export const Footer = () => {
  return (
    <footer className="border-2 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 dark:text-white xl:text-2xl">
              Newsletter de Inteligência Artificial
            </h1>

            <div className="mx-auto mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0">
              <SubscribeForm />
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Páginas
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <Link href="/">Home</Link>
              <Link href="/inscrever-se">Inscrever-se</Link>
              <Link href="/politica-de-privacidade">
                Política de privacidade
              </Link>
              <Link href="/termos-de-uso">Termos de uso</Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-8" />

        <div className="flex items-center justify-between">
          <span>{/* Logo */}</span>

          {/* <div className="-mx-2 flex">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
