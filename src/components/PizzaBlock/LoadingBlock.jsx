import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="134" cy="146" r="105" />
      <rect x="0" y="269" rx="6" ry="6" width="280" height="18" />
      <rect x="0" y="299" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="408" rx="6" ry="6" width="93" height="31" />
      <rect x="138" y="402" rx="20" ry="20" width="139" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
