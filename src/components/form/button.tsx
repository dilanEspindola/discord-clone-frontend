export const ButtonForm = ({ text }: { text: string }) => {
  return (
    <button className="py-2 bg-indigo-500 hover:bg-indigo-600 text-lg text-white font-semibold rounded-md mt-5">
      {text}
    </button>
  );
};
