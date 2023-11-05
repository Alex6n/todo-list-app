import { CgSearch } from "react-icons/cg";

export default function Search() {
  return (
    <div className="flex justify-center">
          <button
            title="Search"
            className="p-2 mb-7 text-2xl hover:text-azure-radiance-400 transition"
          >
            <CgSearch />
          </button>
        </div>
  )
}
