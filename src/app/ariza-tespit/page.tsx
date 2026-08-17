import PageShell from "@/components/PageShell";
import ServicePageView from "@/components/ServicePageView";
import { servicePages } from "@/lib/service-pages";
import { buildServiceMetadata } from "@/lib/seo";

const page = servicePages["ariza-tespit"];

export const metadata = buildServiceMetadata(page);

export default function ArizaTespitPage() {
  return (
    <PageShell>
      <ServicePageView page={page} />
    </PageShell>
  );
}
