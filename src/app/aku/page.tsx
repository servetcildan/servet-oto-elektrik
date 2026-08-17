import PageShell from "@/components/PageShell";
import ServicePageView from "@/components/ServicePageView";
import { servicePages } from "@/lib/service-pages";
import { buildServiceMetadata } from "@/lib/seo";

const page = servicePages.aku;

export const metadata = buildServiceMetadata(page);

export default function AkuPage() {
  return (
    <PageShell>
      <ServicePageView page={page} />
    </PageShell>
  );
}
