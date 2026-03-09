const FallbackLoader = () => {
  return (
    <div
      className="h-screen w-full rounded-3xl"
      style={{
        background: `linear-gradient(
          135deg, 
          #163031 0%, 
          #0C0D0F 40%, 
          #192e29 100%
        )`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="100"
          height="100"
        >
          <circle
            fill="#2DD4BF"
            stroke="#2DD4BF"
            strokeWidth="15"
            r="15"
            cx="40"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2s"
              values="1;0;1"
              keySplines=".5 0 .5 1; .5 0 .5 1"
              repeatCount="indefinite"
              begin="-0.4s"
            />
          </circle>

          <circle
            fill="#2DD4BF"
            stroke="#2DD4BF"
            strokeWidth="15"
            r="15"
            cx="100"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2s"
              values="1;0;1"
              keySplines=".5 0 .5 1; .5 0 .5 1"
              repeatCount="indefinite"
              begin="-0.2s"
            />
          </circle>

          <circle
            fill="#2DD4BF"
            stroke="#2DD4BF"
            strokeWidth="15"
            r="15"
            cx="160"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2s"
              values="1;0;1"
              keySplines=".5 0 .5 1; .5 0 .5 1"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default FallbackLoader;
