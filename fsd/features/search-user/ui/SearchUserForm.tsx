"use client";

import InputMask from "react-input-mask";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@/fsd/shared/ui";
import { useSearchUser } from "../model/useSearchUser";
import { PersonList } from "./PersonList";
import { onUnmaskedChange } from "@/fsd/shared/lib/utils";

export function SearchUserForm() {
  const { data, form, handleSubmitForm, loading } = useSearchUser();

  return (
    <>
      <Card className="w-96 mx-auto">
        <CardHeader>
          <CardTitle>Search</CardTitle>
          <CardDescription>
            You can search users by their email or phone number
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmitForm} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" type="email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                    <FormControl>
                      <InputMask
                        mask="99-99-99"
                        maskPlaceholder={null}
                        alwaysShowMask={false}
                        maskChar="-"
                        value={field.value}
                        onChange={(e) => onUnmaskedChange(e, field.onChange)}
                      >
                        <Input placeholder="number" />
                      </InputMask>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="w-96 mx-auto">
        <PersonList people={data} loading={loading} />
      </div>
    </>
  );
}
