interface Props {
  error: string | undefined;
  labelName?: string;
}

export const Label = ({ error, labelName }: Props) => {
  return (
    <div className={`flex gap-2 ${error ? "[&>*]:text-red-400" : ""}`}>
      <label htmlFor="">{labelName} *</label>
      {error && <span>{error}</span>}
    </div>
  );
};
