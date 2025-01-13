interface ProgressProps {
  progress: number;
}

export function Progress({ progress }: ProgressProps) {
  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="h-1.5 bg-gray-100">
        <div 
          className="h-full bg-[#36b39a] transition-all duration-300 ease-out rounded-r-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}