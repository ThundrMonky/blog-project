export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/01/GettyImages-1246632274.jpg?w=850&h=492&crop=1"
          alt="img"
        ></img>
      </div>
      <div className="texts">
        <h2>
          Amazon now offers Fresh grocery delivery to non-Prime members in
          select US cities
        </h2>
        <p className="info">
          <a className="author">Jack Pitz</a>
          <time>2023-08-02 16:09</time>
        </p>
        <p className="summary">
          Amazon is making its Fresh grocery delivery service available to
          people without Prime memberships in select U.S. cities. In the past,
          Fresh grocery delivery was only available to people who had a Prime
          subscription.
        </p>
      </div>
    </div>
  );
}
