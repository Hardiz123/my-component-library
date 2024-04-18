import { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  const { label, ...restProps } = props;

  return (
    <>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl" {...restProps}>
      {label}
    </button>
    <input
    className=" bg-transparent text-blue font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
    placeholder=" " />
  </>
  );
}
