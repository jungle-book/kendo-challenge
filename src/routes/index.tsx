import { Carasoule, CarasouleItem } from "@/components/Carasoule";
import { ForYouThumbnail } from "@/components/ForYouThumbnail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Carasoule>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
        <CarasouleItem>
          <ForYouThumbnail />
        </CarasouleItem>
      </Carasoule>
    </div>
  );
}
