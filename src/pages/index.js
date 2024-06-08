import { CardTitle } from "@/components/ui/card";

import { PageLinks } from "@/components/PageLinks";

export default function Home(props) {
  return (
    <main className="grid gap-6">
      <CardTitle>Next.js Route Behavior</CardTitle>
      <PageLinks />
    </main>
  );
}
