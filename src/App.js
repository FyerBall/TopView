import { useState } from 'react'
import Categories from './component/Categories'
import Routes from './component/Routes'
import { items } from './data'

// Get all categories without duplication
const allCategories = [...new Set(items.map((item) => item.category))]

function App() {
  const [routes, setRoutes] = useState(items)
  // holds un-duplicated values
  const categories = allCategories

  // Filter through the categories
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category)
    setRoutes(newItems)
  }
  return (
    <main>
      <section>
        <Categories categories={categories} filterItems={filterItems} />
        <Routes routes={routes} />
      </section>
    </main>
  )
}

export default App
