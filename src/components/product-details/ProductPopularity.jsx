const ProductPopularity = () => {
  return (
    <>
      <section className="p-3 flex items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-trending-up text-[#008000]"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="3 17 9 11 13 15 21 7"></polyline>
          <polyline points="14 7 21 7 21 14"></polyline>
        </svg>
        <p className="ml-2 text-xs tablet:text-sm">
          1,000+ people ordered this in the last 7 days
        </p>
      </section>
    </>
  );
};

export default ProductPopularity;
