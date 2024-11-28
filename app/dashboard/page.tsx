import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import Buttons from "@/components/dashboard/buttons";

const BREADCRUMBS_LINKS = [{ text: "Dashboard" }];

export default function Dashboard() {
  return (
    <div className="flex flex-wrap">
      <Breadcrumbs links={BREADCRUMBS_LINKS} />
      <Buttons />
    </div>
  );
}
