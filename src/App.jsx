import React from 'react'
import image from './assets/image.png'
import movies from './components/movies.json'
import search from './assets/search.svg'
function App () {

  

    return (
      <div className="min-h-screen bg-gray-950 text-white">
  {/* Header */}
  <header className="flex flex-col items-center py-8">
    <h1 className="text-4xl font-bold text-blue-500">
      Bolly Entertainment
    </h1>

    <div className="flex gap-3 mt-6">
      <input
        type="text"
        placeholder="Search for movies..."
        className="w-80 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />

      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
        Search
      </button>
    </div>
  </header>

  {/* Movies Grid */}
  <main className="max-w-7xl mx-auto px-6 pb-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-60 object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
              {movie.title}
            </h2>

            <p className="text-blue-400 text-sm mb-2">
              {movie.genre}
            </p>

            <p className="text-gray-300 text-sm line-clamp-3">
              {movie.description}
            </p>

            <div className="mt-4 text-sm text-gray-400 space-y-1">
              <p>
                <span className="font-semibold text-white">
                  Episodes:
                </span>{" "}
                {movie["Total Episodes"]}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Language:
                </span>{" "}
                {movie.Language}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Year:
                </span>{" "}
                {movie.year}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
</div>

    )
  }


export default App