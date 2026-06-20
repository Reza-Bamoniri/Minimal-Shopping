interface Props {
  error: string | null;
  onRetry: () => void;
}

const LoadingScreen = ({ error, onRetry }: Props) => {
  return (
    <div className="fixed inset-0 bg-orange-400 flex items-center justify-center z-999">
      {error ? (
        <div className="flex flex-col items-center gap-6">
          <p className="text-white text-xl font-medium">
            Failed to load website
          </p>
          <button
            onClick={onRetry}
            className="px-8 py-3 bg-white text-orange-400 rounded-full font-bold hover:bg-orange-50 transition cursor-pointer"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
      )}
    </div>
  );
};

export default LoadingScreen;
