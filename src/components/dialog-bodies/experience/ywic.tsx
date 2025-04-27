import BadgeList from "@/components/badge-list";

export default function YWiCExperience() {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "Curriculum Creation",
    "Verbal and Written Communication",
    "Organization",
  ];

  return (
    <div className="flex gap-3">
      <div className="">Skills:</div>
      <BadgeList labels={skills} />
    </div>
  );
}
