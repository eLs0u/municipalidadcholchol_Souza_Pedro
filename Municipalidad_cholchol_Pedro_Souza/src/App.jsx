
export default function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Municipalidad de Cholchol</h1>
        <nav className="space-x-4">
          <a className="hover:underline" href="#">Inicio</a>
          <a className="hover:underline" href="#">Servicios</a>
          <a className="hover:underline" href="#">Noticias</a>
          <a className="hover:underline" href="#">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Bienvenido a la Municipalidad de Cholchol</h2>
        <p className="text-gray-700">Información, servicios y atención a la comunidad</p>
      </section>

      {/* Servicios */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Servicios Municipales</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shadow p-4 rounded bg-white">
            <h4 className="font-bold mb-2">Pagos Online</h4>
            <p className="text-gray-600">Realiza trámites y pagos desde tu hogar.</p>
          </div>
          <div className="shadow p-4 rounded bg-white">
            <h4 className="font-bold mb-2">Registro Social</h4>
            <p className="text-gray-600">Actualiza y revisa tu información.</p>
          </div>
          <div className="shadow p-4 rounded bg-white">
            <h4 className="font-bold mb-2">Atención Ciudadana</h4>
            <p className="text-gray-600">Canal oficial de consultas y solicitudes.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="p-8 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-center">Formulario de Contacto</h3>
        <form className="max-w-md mx-auto bg-white p-6 shadow rounded">
          <label className="block mb-2">Nombre Completo</label>
          <input className="w-full mb-4 p-2 border rounded" type="text"/>

          <label className="block mb-2">Email</label>
          <input className="w-full mb-4 p-2 border rounded" type="email"/>

          <label className="block mb-2">Mensaje</label>
          <textarea className="w-full mb-4 p-2 border rounded"></textarea>

          <button className="bg-blue-700 text-white w-full py-2 rounded">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center p-4 mt-8">
        © 2025 Municipalidad de Cholchol - Todos los derechos reservados
      </footer>
    </div>
  );
}
