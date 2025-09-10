import { IconChevronDown, IconSearch, IconX } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

export interface Option {
  value: string | number;
  key: string | number;
  text: string;
}

interface Tag {
  nombre: string;
  id: number;
}

export default function SelectTags({
  label,
  options,
  onChange,
  value,
  messageNoResults,
  labelInput,
  inputSearch = true,
  selectedTags,
  handleRemoveTag,
}: {
  label: string;
  options: Option[];
  onChange: (value: string | number) => void;
  value: string | number;
  messageNoResults: string;
  labelInput: string;
  inputSearch?: boolean;
  selectedTags: Tag[];
  handleRemoveTag: (tagId: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const [, setCurrentValue] = useState(value);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Efecto para enfocar el input de búsqueda cuando se abre el desplegable
  useEffect(() => {
    if (open && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [open]);

  // Efecto para actualizar las opciones filtradas cuando cambia el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) =>
        option.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [searchTerm, options]);

  const handleToggleOpen = () => {
    setOpen(!open);
    // Limpiar búsqueda cuando se cierra
    if (open) {
      setSearchTerm("");
    }
  };

  const handleOptionSelect = (value: string | number, text: string) => {
    setCurrentValue(text);
    onChange(value);
    setOpen(false);
    setSearchTerm("");
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      open &&
      e.target &&
      !(e.target as Element).closest(".select-container")
    ) {
      setOpen(false);
      setSearchTerm("");
    }
  };

  // Efecto para manejar el clic fuera del componente
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="select-container min-w-max w-full max-h-max flex justify-between items-center gap-3 bg-active py-3 px-5 rounded-[22px] relative transition-all bg-white border border-[#ccc]">
      <div>
        <p className="text-[#999] text-[10px] font-medium text-start">
          {label}
        </p>

        <div className="mt-2 flex flex-wrap justify-start items-center gap-2 max-w-[530px]">
          {selectedTags &&
            selectedTags.map((tag) => (
              <div
                key={tag.id}
                className="w-max text-sm flex justify-between gap-4 items-center  bg-active text-white py-2 px-3 rounded-3xl focus-within:border-primary border-active bg-primary border border-black/10 backdrop-blur-lg"
              >
                <span>{tag.nombre}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag.id)}
                  className="text-white font-bold"
                >
                  <IconX className="size-4" />
                </button>
              </div>
            ))}
        </div>
      </div>

      <IconChevronDown
        onClick={handleToggleOpen}
        className={`cursor-pointer transition-all ${
          open ? "rotate-x-180" : ""
        }`}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            // {...animationFadeInUp()}
            className="absolute top-[120%] left-0 w-full bg-active py-3 px-5 rounded-3xl z-[1000] overflow-x-hidden bg-white shadow-xl backdrop-blur-lg"
          >
            {/* Buscador */}
            {inputSearch && (
              <div className="mb-3 flex items-center gap-2 bg-background bg-opacity-10 rounded-[14px] px-3 py-3 border border-[#ccc]">
                <IconSearch size={16} className="text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={labelInput}
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            )}

            {/* Lista de opciones */}
            <div className="max-h-[140px] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col justify-start items-start gap-3">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map(({ value, key, text }) => (
                    <p
                      key={key}
                      onClick={() => handleOptionSelect(value, text)}
                      className="cursor-pointer text-start  text-base w-full hover:text-primary transition-all"
                    >
                      {text}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">{messageNoResults}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
