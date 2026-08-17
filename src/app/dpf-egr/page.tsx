import PageShell from "@/components/PageShell";
import ServicePageView from "@/components/ServicePageView";
import { servicePages } from "@/lib/service-pages";
import { buildServiceMetadata } from "@/lib/seo";

const page = servicePages["dpf-egr"];

export const metadata = buildServiceMetadata(page);

export default function DpfEgrPage() {
  return (
    <PageShell>
      <ServicePageView page={page} />
    </PageShell>
  );
}
