import Loader from '@/components/Shared/Loader';

export default async function Loading() {
  return (
    <div className="h-screen w-screen bg-secondary flex flex-wrap justify-center content-center">
      <div>
        <Loader />
      </div>
    </div>
  );
}
