import PollWidget from "./components/PollWidget"

const App = () => {
  return (
    <div className="">
      <PollWidget onVoteAdd={()=>{}} onVoteRemove={()=>{}} options={[]} pollId="1" title=""  />
    </div>
  )
}

export default App
