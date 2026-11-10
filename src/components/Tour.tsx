import { TourViewer } from "@/components/TourViewer";

export function Tour() {
  return (
    <section className="flat" id="tour">
      <div className="wrap">
        <div className="sec-eye mono rv">Product tour</div>
        <h2 className="rv">Meet your new<br />academic headquarters.</h2>
        <p className="sub rv">Real screens from the app. Pick a page, or let the tour play.</p>
        <TourViewer />
      </div>
    </section>
  );
}
