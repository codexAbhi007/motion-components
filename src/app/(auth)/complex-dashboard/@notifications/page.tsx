import GridCard from "@/components/GridCard";
import Link from "next/link";

const Notifications = () => {
  return (
    <div >
      <GridCard>
        <div>Notifications</div>
        <div>
          <Link href={`/complex-dashboard/archived`}>Archived</Link>
        </div>
      </GridCard>
    </div>
  );
};
export default Notifications;
