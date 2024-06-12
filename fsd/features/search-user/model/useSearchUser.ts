import { zodResolver } from "@hookform/resolvers/zod";
import { QueryFilters, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getPeople } from "../api/getPeople";
import { formSchema } from "./types";
import { client } from "@/fsd/shared/api";

export function useSearchUser() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // cache requests by email AND number
  const queryKey = useMemo(
    () => ["search", form.getValues("email"), form.getValues("number")],
    [form]
  );

  console.log("num", form.getValues("number"));

  const { data, refetch, fetchStatus } = useQuery({
    queryKey,
    queryFn: async ({ signal }) => {
      return getPeople({
        formData: form.getValues(),
        abortSignal: signal,
      });
    },
    enabled: false,
  });

  const handleSubmitForm = form.handleSubmit(async () => {
    await client.cancelQueries(queryKey as QueryFilters);
    refetch();
  });

  return {
    data,
    form,
    loading: fetchStatus === "fetching",
    handleSubmitForm,
  };
}
