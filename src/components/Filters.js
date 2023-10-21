
export default function Filters() {
  return (

    <div className="mt-5 rounded-xl bg-azure-radiance-100 p-1 max-w-fit">
      <div className="flex gap-1 text-sm font-bold">
      <label class="filter badge urgent ui-selected:urgent-d ui-not-selected:hover:urgent-d">Urgent</label>
      <label class="filter badge strategic ui-selected:strategic-d ui-not-selected:hover:strategic-d">Strategic</label>
      <label class="filter badge pressing ui-selected:pressing-d ui-not-selected:hover:pressing-d">Pressing</label>
      <label class="filter badge optional ui-selected:optional-d ui-not-selected:hover:optional-d">Optional</label>
      </div>
    </div>

    );
}
  