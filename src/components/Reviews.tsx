import { REVIEWS } from "@/content/site";

export function Reviews() {
  return (
    <section className="flat" id="reviews">
      <div className="wrap center">
        <div className="sec-eye mono rv">Student reviews</div>
        <h2 className="rv">What students say.</h2>
        <p className="sub rv">Real feedback from students using HSC Command Center.</p>
        <div className="rvs rv" id="rvs">
          {REVIEWS.length === 0 ? (
            <div className="rc e">
              <p>Using HSC Command Center? Share your experience with a friend who is preparing for HSC 2027. Real student reviews will be shown here.</p>
            </div>
          ) : (
            REVIEWS.map((r) => (
              <figure className="rc" style={{ margin: 0 }} key={r.name + r.quote}>
                <p>“{r.quote}”</p>
                <b>{r.name}</b>
                {r.meta && <small>{r.meta}</small>}
              </figure>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
