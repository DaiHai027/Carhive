import dynamic from 'next/dynamic';
import { MapSkeleton } from '@/app/components/skeletons';
import { getLocations } from '@/db/queries';

const DynamicMap = dynamic(
  async () => {
    const { Map } = await import('./map');
    return { default: Map };
  },
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  },
);

export async function MapContainer() {
  const locations = await getLocations();

  return (
    <div className="sticky top-[var(--header-gap)] z-10 basis-auto">
      <DynamicMap locations={locations} />
    </div>
  );
}
