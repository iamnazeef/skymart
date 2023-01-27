const Paginate = ({
  totalProducts,
  productsPerPage,
  paginate,
  currentPage,
}) => {
  const pageNumber = [];

  // Math.ceil(totalProducts / productsPerPage)

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="w-full flex justify-center items-center">
      <ul className="flex justify-start w-fit max-w-[150px] tablet:max-w-[300px] overflow-scroll snap-x">
        {pageNumber.map((number) => (
          <li key={number} className="snap-start">
            <a
              onClick={() => {
                paginate(number);
              }}
              href="#"
              className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full  p-0 text-sm ${
                currentPage === number ? "bg-blue-900" : "bg-blue-600"
              } hover:bg-blue-900 text-white transition duration-150 ease-in-out hover:bg-light-300`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
