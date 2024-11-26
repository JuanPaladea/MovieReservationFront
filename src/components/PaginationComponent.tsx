const PaginationComponent = ({ page, setPage }: { page: number, setPage: any}) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <nav className="container px-5 py-12 mx-auto">
      <ul className="list-style-none flex ">
        <li>
          <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700"
            onClick={handlePrev}>Previous</a>
        </li>
        { page >= 2 && (
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700"
              onClick={() => setPage(page - 1)}
              >{page - 1}</a>
          </li>
        )}
        <li aria-current="page">
          <a
            className="border relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700"
            onClick={() => setPage(page)}
            >{page}</a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700"
            onClick={() => setPage(page + 1)}
            >{page + 1}</a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700"
            onClick={() => setPage(page + 2)}
            >{page + 2}</a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700"
            onClick={handleNext}
            >Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default PaginationComponent;