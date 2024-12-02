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
      <ul className="list-style-none flex">
        <li>
          <button
            className={`relative block rounded px-3 py-1.5 text-sm transition duration-300 ${
              page === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-neutral-100 text-surface"
            }`}
            onClick={handlePrev}
            disabled={page === 1}
          >
            Previous
          </button>
        </li>
        {page > 1 && (
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100"
              onClick={() => setPage(page - 1)}
            >
              {page - 1}
            </a>
          </li>
        )}
        <li aria-current="page">
          <a
            className="border relative block rounded bg-neutral-200 px-3 py-1.5 text-sm text-primary-700"
          >
            {page}
          </a>
        </li>
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100"
            onClick={() => setPage(page + 1)}
          >
            {page + 1}
          </a>
        </li>
        <li>
          <button
            className={`relative block rounded px-3 py-1.5 text-sm transition duration-300 ${
              "hover:bg-neutral-100 text-surface"
            }`}
            onClick={handleNext}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;