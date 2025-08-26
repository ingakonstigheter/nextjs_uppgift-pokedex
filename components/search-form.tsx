import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchForm() {
  return (
    <form action="" className="grid w-[400px] items-center gap-2 relative">
      <Input
        type="text"
        placeholder="Search for a Pokemon"
        className="shadow"
      />
      <Button
        type="submit"
        variant="outline"
        className="absolute right-0 size-6 m-2 bg-blue-500">
        <figure>
          <CiSearch className="text-white" />
        </figure>
      </Button>
    </form>
  );
}
