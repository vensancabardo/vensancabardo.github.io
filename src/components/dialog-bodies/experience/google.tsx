import BadgeList from "@/components/badge-list";

export default function GoogleExperience() {
  const skills = ["Java", "Android", "Front-end Development"];

  return (
    <div className="flex gap-3">
      <div className="">Skills:</div>
      <BadgeList labels={skills} />
    </div>
  );
}
