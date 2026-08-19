import TopicPageView from "@/components/TopicPageView";
import { adblueMetadata } from "@/lib/seo";
import { adblueTopic } from "@/lib/topic-pages";

export const metadata = adblueMetadata;

export default function AdbluePage() {
  return <TopicPageView data={adblueTopic} />;
}
