import type { Release } from '../../data/types'
import InstalledPackageCard from './InstalledPackageCard'

interface InstalledPackagesListProps {
  filteredReleases: Release[]
  context: string
}

export default function InstalledPackagesList({
  context,
  filteredReleases,
}: InstalledPackagesListProps) {
  return (
    <div>
      {filteredReleases.map((installedPackage: Release) => {
        return (
          <InstalledPackageCard
            key={installedPackage.name}
            release={installedPackage}
            context={context}
          />
        )
      })}
    </div>
  )
}
