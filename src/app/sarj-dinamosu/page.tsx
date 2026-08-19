import TopicPageView from "@/components/TopicPageView";
import { chargingMetadata } from "@/lib/seo";
import { chargingTopic } from "@/lib/topic-pages";

export const metadata = chargingMetadata;

export default function SarjDinamosuPage() {
  return <TopicPageView data={chargingTopic} />;
}
