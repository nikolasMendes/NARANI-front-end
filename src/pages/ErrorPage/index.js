import errorLogo from "../../images/sushi-hugging.png";

import { Link } from "react-router-dom";
export function ErrorPage() {
  return (
    <div class="flex min-h-full items-center justify-center px-4 sm:px-6 bg-[#F9E4D4] h-screen flex-row space-x-10">
      <div class="border-orange-400 border-solid border p-16 mr-48  rounded-2xl bg-[#ffb592] shadow-2xl ">
        <img src={errorLogo} alt="Error" />
        <h1 className=" font-bold text-7xl">SORRY</h1>
        <h2 className="text-4xl">We Couldn'd find that page</h2>
        <p className="text-xl">
          try searching or go to{" "}
          <Link to="/" className=" text-blue-700">
            NARANI's home page
          </Link>
        </p>
      </div>
    </div>
  );
}
