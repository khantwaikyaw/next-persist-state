import usePersistState from "./";
import { act } from "@testing-library/react-hooks";
import { useEffect } from "react";

// mock timer using jest
jest.useFakeTimers();

describe("usePersistHook", () => {
  it("value and setValue clear value", () => {
    const TestFunction = () => {
      const [value, setValue, clearValue] = usePersistState(
        "SAMPLE_KEY",
        "Hello World!"
      );

      expect(value).toBe("Hello World!");

      useEffect(() => {
        setValue("Updated Hello World!");
      }, [setValue]);

      expect(value).toBe("Updated Hello World!");

      // Fast-forward 1sec
      act(() => {
        jest.advanceTimersByTime(1000);
        useEffect(() => {
          clearValue();
        }, [clearValue]);
      });
      expect(value).toBe();

      return value;
    };
  });
});
