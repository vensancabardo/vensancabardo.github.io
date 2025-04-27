import BadgeList from "@/components/badge-list";

export default function NGExperience() {
  const skills = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Flask",
    "Tableau REST API",
  ];

  return (
    <div className="flex gap-3">
      <div className="">Skills:</div>
      <BadgeList labels={skills} />
    </div>
  );
}
