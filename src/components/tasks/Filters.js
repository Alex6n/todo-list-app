import { useState } from "react";

export default function Filters() {
  const [tags, setTags] = useState({
    urgent: false,
    strategic: false,
    pressing: true,
    optional: true
  });

  const handleSelect = (tag) => {
    setTags((prevState) => ({
      ...prevState,
      [tag]: !prevState[tag],
    }));
  }

  return (
    <div className="mt-3 flex gap-1 text-sm font-bold">
      <a href="#" onClick={() => handleSelect("urgent")} className={tags.urgent ? "filter badge urgent" : "filter badge bg-gray-600"} >Urgent</a>
      <a href="#" onClick={() => handleSelect("strategic")} className={tags.strategic ? "filter badge strategic" : "filter badge bg-gray-600"} >Strategic</a>
      <a href="#" onClick={() => handleSelect("pressing")} className={tags.pressing ? "filter badge pressing" : "filter badge bg-gray-600"} >Pressing</a>
      <a href="#" onClick={() => handleSelect("optional")} className={tags.optional ? "filter badge optional" : "filter badge bg-gray-600"} >Optional</a>
    </div>
  );
}
