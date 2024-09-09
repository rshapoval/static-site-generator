import Breadcrumbs from "@/components/breadcrumbs";

const BREADCRUMBS_LINKS = [{ text: "Home" }];

export default function Dashboard() {
  return (
    <div>
      <Breadcrumbs links={BREADCRUMBS_LINKS} />
    </div>
  );
}
