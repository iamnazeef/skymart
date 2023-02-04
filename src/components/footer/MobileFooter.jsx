const MobileFooter = () => {
  return (
    <nav className="mobile-footer p-3 tablet:hidden">
      <ul className="text-[0.85rem] flex flex-col items-start space-y-3">
        <li className="hover:underline">
          <a href="#">Privacy and Security</a>
        </li>
        <li className="hover:underline">
          <a href="#">CA Privacy rights</a>
        </li>
        <li className="hover:underline">
          <a href="#">Do not sell my personal information</a>
        </li>
        <li className="hover:underline">
          <a href="#">Help</a>
        </li>
        <li className="hover:underline">
          <a href="#">Terms of use</a>
        </li>
        <li className="hover:underline">
          <a href="#">All Departments</a>
        </li>
        <li className="hover:underline">
          <a href="#">Store Directory</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileFooter;
