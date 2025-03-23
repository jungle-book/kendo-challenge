import { Carasoule } from "@/components/Carasoule";
import { ForYouThumbnail } from "@/components/ForYouThumbnail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Carasoule title={"Section Title"}>
        <ForYouThumbnail />
        <ForYouThumbnail />
        <ForYouThumbnail />
      </Carasoule>
    </div>
  );
}
