import { VideoPlayer } from "@/components/VideoPlayer";

export function VideoDemo() {
  return (
    <section className="flat" id="video">
      <div className="wrap center">
        <div className="sec-eye mono rv">Product demo</div>
        <h2 className="rv">Watch it in action.</h2>
        <p className="sub rv">A one-minute walkthrough cut from a real screen recording of the app.</p>
        <VideoPlayer />
      </div>
    </section>
  );
}
