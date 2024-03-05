import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Website!
          </h1>
          <p className="text-lg text-gray-600">
            Discover amazing features and sign up now!
          </p>
        </header>
        <main className="mt-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Feature 1
            </h2>
            <p className="text-lg text-gray-600">Description of Feature 1</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Feature 2
            </h2>
            <p className="text-lg text-gray-600">Description of Feature 2</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Feature 3
            </h2>
            <p className="text-lg text-gray-600">Description of Feature 3</p>
          </section>
        </main>
        <footer>
          <div className="grid gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to="/login"> Login</Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to="/d"> Dashboard</Link>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Landing;
