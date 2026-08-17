import PageShell from "@/components/PageShell";
import ServicePageView from "@/components/ServicePageView";
import { servicePages } from "@/lib/service-pages";
import { buildServiceMetadata } from "@/lib/seo";

const page = servicePages["abs-beyni"];

export const metadata = buildServiceMetadata(page);

export default function AbsBeyniPage() {
  return (
    <PageShell>
      <ServicePageView page={page} />
    </PageShell>
  );
}
