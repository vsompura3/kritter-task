import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  id: string;
  label: string;
  value: string;
};

interface CustomSelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder?: string;
  value?: string | undefined;
  onValueChange?: (val: string) => void;
}

function CustomSelect({
  options,
  placeholder = "Select an Option",
  value,
  onValueChange,
}: CustomSelectProps) {
  const defaultValue = value || options[0]?.value;
  return (
    <Select value={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="!h-12 w-[16rem]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option) => (
          <SelectItem key={option.id} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CustomSelect;
