import React, { useState } from 'react'

const AppWithoutUseEffect = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [hasFetched, setHasFetched] = useState(false)

  const getData = async (pageToLoad = page) => {
    try {
      setLoading(true)
      setError('')
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageToLoad}&limit=12`)
      if (!response.ok) {
        throw new Error('Failed to fetch photos')
      }
      const data = await response.json()
      setPhotos(data)
      setPage(pageToLoad)
      setHasFetched(true)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-2">
        <button
          onClick={() => getData(1)}
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-300 transition hover:scale-105 hover:from-blue-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Loading...' : 'Get Data'}
        </button>

        <button
          onClick={() => getData(page - 1)}
          disabled={loading || !hasFetched || page === 1}
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={() => getData(page + 1)}
          disabled={loading || !hasFetched}
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>

        <p className="ml-2 text-sm text-slate-700">Page {page}</p>
      </div>

      {error && <p className="mt-3 text-red-600">{error}</p>}

      <div className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded-lg bg-white p-2 shadow">
            <img
              src={`https://picsum.photos/id/${photo.id}/300/300`}
              alt={photo.author}
              className="block h-44 w-full rounded-md object-cover"
            />
            <p className="px-1 py-2 text-xs text-slate-600">{photo.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppWithoutUseEffect

/*
To use this version temporarily, change import in src/main.jsx:
import App from './AppWithoutUseEffect.jsx'
*/
