import TopicPageView from "@/components/TopicPageView";
import { starterMetadata } from "@/lib/seo";
import { starterTopic } from "@/lib/topic-pages";

export const metadata = starterMetadata;

export default function MarsDinamosuPage() {
  return <TopicPageView data={starterTopic} />;
}
