import { Person as PersonProps } from "@/fsd/shared/api";
import { Card, CardContent, CardHeader } from "@/fsd/shared/ui";

export function Person({ email, number }: PersonProps) {
  return (
    <Card>
      <CardHeader>Email: {email}</CardHeader>
      <CardContent>Number: {number}</CardContent>
    </Card>
  );
}
