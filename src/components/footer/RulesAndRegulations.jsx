const RulesAndRegulations = () => {
  return (
    <nav className="hidden tablet:block p-3">
      <ul className="flex text-[0.65rem] space-x-2 flex-wrap">
        <li className="hover:underline">
          <a href="#">Terms of Use</a>
        </li>
        <li className="hover:underline">
          <a href="#">Privacy & Security</a>
        </li>
        <li className="hover:underline">
          <a href="#">CA Privacy Rights</a>
        </li>
        <li className="hover:underline">
          <a href="#">California Supply Chain Act</a>
        </li>
        <li className="hover:underline">
          <a href="#">Your Privacy Choices</a>
        </li>
        <li className="hover:underline">
          <a href="#">Request My Personal Information</a>
        </li>
      </ul>
    </nav>
  );
};

export default RulesAndRegulations;
