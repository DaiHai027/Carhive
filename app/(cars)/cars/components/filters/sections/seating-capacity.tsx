import { Dispatch, SetStateAction, useState } from "react"

import { MinusIcon } from "@/app/components/icons/minus"
import { PlusIcon } from "@/app/components/icons/plus"
import { Button } from "@/app/components/ui/button"

import { SelectedFilters } from "../types"

interface SeatingCapacitySectionProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function SeatingCapacitySection({
  selectedFilters,
  setSelectedFilters,
}: SeatingCapacitySectionProps) {
  const [counter, setCounter] = useState(selectedFilters.seats || 0)

  const handleMinusClick = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter - 1
      setSelectedFilters({
        ...selectedFilters,
        seats: newCounter > 0 ? newCounter : undefined,
      })
      return newCounter
    })
  }

  const handlePlusClick = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1
      setSelectedFilters({
        ...selectedFilters,
        seats: newCounter > 0 ? newCounter : undefined,
      })
      return newCounter
    })
  }

  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Seats</h3>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <Button
            onClick={handleMinusClick}
            variant={"outline"}
            size={"icon"}
            className="shrink-0 rounded-full hover:border-black hover:bg-neutral-50"
            disabled={counter <= 0}
          >
            <MinusIcon className="inline size-4 shrink-0" />
          </Button>

          <div className="w-9 text-center tabular-nums">
            {!selectedFilters.seats
              ? "Any"
              : selectedFilters.seats === 7
                ? `${selectedFilters.seats}+`
                : selectedFilters.seats}
          </div>

          <Button
            onClick={handlePlusClick}
            variant={"outline"}
            size={"icon"}
            className="shrink-0 rounded-full hover:border-black hover:bg-neutral-50"
            disabled={counter >= 7}
          >
            <PlusIcon className="inline size-4 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  )
}