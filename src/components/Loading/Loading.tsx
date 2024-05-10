import './Loading.css';
const Loading = ({text}: {text: string}) => {
  return (
    <div className="loading__container">
      <h1>{text}</h1>
    </div>
  );
}

export default Loading;