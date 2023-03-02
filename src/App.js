import Review from "./Review";

function App() {
  return (
    <main className="grid min-h-screen">
      <section className="max-w-2xl w-4/5 mx-auto">
        <div className="my-12">
          <h1 className="text-4xl text-center font-bold">Our Reviews</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>
        </div>
        <Review></Review>
      </section>
    </main>
  );
}

export default App;
