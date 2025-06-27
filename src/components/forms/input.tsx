type InputProps = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, name, ...props }: InputProps) {
  return (
    <div className="mb-[1rem]">
      <label className="block pb-[0.5rem]" htmlFor={name}>
        {label}
      </label>
      <input
        className="border border-[#eee] block w-full p-[0.8rem] rounded-md bg-[#eee] transition delay-200 focus:outline-none focus:border-[#fb1] focus:bg-white focus:shadow-[0_0_0_3px_#fea] hover:outline-none hover:border-[#fb1] hover:bg-white hover:shadow-[0_0_0_3px_#fea]"
        type="text"
        id={name}
        name={name}
        {...props}
      />
      {error && (
        <p className="text-[#f31] text-[0.875rem] mt-[0.25rem]">{error}</p>
      )}
    </div>
  );
}
