import Input from '../components/Input';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="flex flex-col justify-around">
      InputStyled (@mui/core)
      <Input onChange={(event) => console.log(event.target)} />
      <img src="/mui-core-with-tailwind.png" />
    </div>
  );
}

export default Index;
