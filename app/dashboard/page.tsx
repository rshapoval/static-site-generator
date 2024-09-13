import Breadcrumbs from "@/components/breadcrumbs";
import Buttons from "@/components/buttons";

const BREADCRUMBS_LINKS = [{ text: "Dashboard" }];

export default function Dashboard() {
  return (
    <div className="flex flex-wrap">
      <Breadcrumbs links={BREADCRUMBS_LINKS} />
      <Buttons />
    </div>
  );
}
