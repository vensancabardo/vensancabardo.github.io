import { Badge } from "./ui/badge";

export default function BadgeList({ labels }: { labels: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {labels.map((label, index) => {
        return (
          <Badge key={index} variant="secondary">
            {label}
          </Badge>
        );
      })}
    </div>
  );
}
