import Input from '../components/Input';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="flex flex-col justify-around">
      <h2 className="text-3xl font-semibold text-indigo-500 mb-8">Overview</h2>
      <img src="/mui-core-with-tailwind.png" width="1200px" />
      <h2 className="text-3xl font-semibold text-indigo-500 mb-8">
        Material API Example
      </h2>
      <Input
        onChange={(event) => console.log(event.target)}
        startAdornment={<span className="text-green-400">RESOLVED</span>}
        endAdornment={<span className="text-red-400">IMPORTANT</span>}
      />
    </div>
  );
}

export default Index;
