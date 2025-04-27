import BadgeList from "@/components/badge-list";

export default function AccentureExperience() {
  const skills = [
    "Python",
    "TypeScript",
    "LangChain",
    "OpenAI",
    "Prompt Engineering",
    "Generative AI",
    "React",
    "HTML",
    "Tailwind CSS",
    "MongoDB",
    "Git",
    "GitHub",
    "Prototype Creation",
    "Collaboration",
    "Verbal and Written Communication",
    "Agile Workflow",
  ];

  return (
    <div className="flex gap-3">
      <div className="">Skills:</div>
      <BadgeList labels={skills} />
    </div>
  );
}
