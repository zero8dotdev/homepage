"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  selected: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelectOption: (option: string) => void;
}

const Dropdown = ({
  label,
  options,
  selected,
  isOpen,
  onToggle,
  onSelectOption,
}: DropdownProps) => {
  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-charcoal px-3 py-2 text-sm text-description cursor-pointer"
        onClick={onToggle}
      >
        {selected || label}
        <ChevronDown />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full rounded-md bg-charcoal text-description shadow-lg">
          <div className="py-1">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onSelectOption(option)}
                className="block w-full text-left px-4 py-2 text-sm opacity-75 hover:bg-onyx hover:opacity-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface DropdownsProps {
  dropdowns: {
    label: string;
    options: string[];
  }[];
}

const Dropdowns = ({ dropdowns }: DropdownsProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    new Array(dropdowns.length).fill("")
  );
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleOptionSelect = (index: number, option: string) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = option;
    setSelectedValues(updatedValues);
    setOpenDropdownIndex(null);
  };

  return (
    <div className="grid lg:grid-cols-4 gap-4">
      {dropdowns.map((dropdown, index) => (
        <Dropdown
          key={index}
          label={dropdown.label}
          options={dropdown.options}
          selected={selectedValues[index]}
          isOpen={openDropdownIndex === index}
          onToggle={() => toggleDropdown(index)}
          onSelectOption={(option) => handleOptionSelect(index, option)}
        />
      ))}
    </div>
  );
};

export default Dropdowns;
