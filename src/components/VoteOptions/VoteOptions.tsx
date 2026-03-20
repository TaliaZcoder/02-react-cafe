import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div>
      <button onClick={() => onVote("good")}>Good</button>
      <button onClick={() => onVote("neutral")}>Neutral</button>
      <button onClick={() => onVote("bad")}>Bad</button>

      {canReset && <button onClick={onReset}>Reset</button>}
    </div>
  );
}