import ConfigList from '@/components/ConfigList';

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">PC Configurations</h1>
      <ConfigList />
    </main>
  );
} 