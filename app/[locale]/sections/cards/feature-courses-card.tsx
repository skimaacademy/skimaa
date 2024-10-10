import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FeaturedCoursesCardProps {
  title: string;
  amount: string | number;
  description?: string;
}

export function FeaturedCoursesCard({
  title,
  amount,
  description = ""
}: FeaturedCoursesCardProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-sm font-normal text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold default-text-color">
          {description} <span className="">{amount}</span>
        </p>
      </CardContent>
    </Card>
  );
}
