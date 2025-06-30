import GridCard from "@/components/GridCard"
import Link from "next/link"

const ArchivedNotifications = () => {
  return (
    <div >
      <GridCard>
        <div>Archived Notifications</div>
        <div>
          <Link href={`/complex-dashboard`}>Default</Link>
        </div>
      </GridCard>
    </div>
  )
}
export default ArchivedNotifications