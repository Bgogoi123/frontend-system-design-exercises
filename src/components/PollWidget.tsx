interface Option {
  id: string;
  title: string;
  voteCount: number;
}

interface PollWidgetProps {
  pollId: string;
  title: string;
  options: Option[];
  multiple?: boolean;
  disable?: boolean;
  onVoteAdd: (pollId: string, selectedOptions: Option[]) => void;
  onVoteRemove: (pollId: string, selectedOptions: Option[]) => void;
}

const PollWidget = ({}: PollWidgetProps) => {
  return (
    <div
      style={{
        border: "1px solid grey",
        padding: "0.3rem",
        borderRadius: "0.3rem",
      }}
    >
      Poll Widget
    </div>
  );
};

export default PollWidget;
