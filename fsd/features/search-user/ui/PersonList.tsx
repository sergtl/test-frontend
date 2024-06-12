import { Person } from "@/fsd/entity/person";
import { Person as PersonType } from "@/fsd/shared/api";
import { Loader } from "lucide-react";

interface PersonListProps {
  people: PersonType[];
  loading: boolean;
}

export function PersonList({ loading, people }: PersonListProps) {
  return (
    <>
      {loading && <Loader className="mt-3 mx-auto animate-spin" />}

      {people?.length > 0 && (
        <div className="flex flex-col gap-3 mt-3">
          {people?.map((person) => (
            <Person key={`${person.email}-${person.number}`} {...person} />
          ))}
        </div>
      )}

      {!loading && people?.length === 0 && (
        <p className="text-center text-red-600 mt-3">
          Sorry, no users have been found.
        </p>
      )}
    </>
  );
}
