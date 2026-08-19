import TopicPageView from "@/components/TopicPageView";
import { repairMetadata } from "@/lib/seo";
import { repairTopic } from "@/lib/topic-pages";

export const metadata = repairMetadata;

export default function OsmancikOtoTamirPage() {
  return <TopicPageView data={repairTopic} />;
}
